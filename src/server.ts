import app from './app';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logger = require('logflake');

const log = logger();
const PORT = 8006;

app.listen(PORT, () => log(`Server started at port ${PORT}`));
