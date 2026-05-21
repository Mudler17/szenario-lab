import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

const isProduction = process.env.NODE_ENV === 'production';
const basicAuthUser = process.env.BASIC_AUTH_USER;
const basicAuthPassword = process.env.BASIC_AUTH_PASSWORD;
const port = Number.parseInt(process.env.PORT ?? '3000', 10);

const decodeBasicAuthHeader = (authorizationHeader) => {
  if (!authorizationHeader || !authorizationHeader.startsWith('Basic ')) {
    return null;
  }

  const encodedCredentials = authorizationHeader.slice('Basic '.length);

  try {
    const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf8');
    const separatorIndex = decodedCredentials.indexOf(':');

    if (separatorIndex < 0) {
      return null;
    }

    return {
      username: decodedCredentials.slice(0, separatorIndex),
      password: decodedCredentials.slice(separatorIndex + 1)
    };
  } catch {
    return null;
  }
};

const hasAuthConfiguration = Boolean(basicAuthUser) && Boolean(basicAuthPassword);

app.use((req, res, next) => {
  if (isProduction && !hasAuthConfiguration) {
    res.status(503).type('text/plain').send('Server authentication is not configured.');
    return;
  }

  if (!hasAuthConfiguration) {
    next();
    return;
  }

  const credentials = decodeBasicAuthHeader(req.headers.authorization);

  if (
    credentials?.username === basicAuthUser
    && credentials?.password === basicAuthPassword
  ) {
    next();
    return;
  }

  res.set('WWW-Authenticate', 'Basic realm="Protected", charset="UTF-8"');
  res.status(401).type('text/plain').send('Authentication required.');
});

app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
