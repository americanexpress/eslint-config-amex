// below 2 constants are not valid glob patterns on their own, must be preceeded by a directory such as "**/" to be used as a glob pattern
export const JS_FILES = "*.{js,jsx,mjs,cjs,snap}";
export const JS_AND_TS_FILES = "*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,snap}"

export const JS_FILES_IN_ANY_DIR = `**/${JS_FILES}`;
export const JS_AND_TS_FILES_IN_ANY_DIR = `**/${JS_AND_TS_FILES}`;

export const JS_FILES_IN_TEST_DIR = `**/__{tests,mocks}__/**/${JS_FILES}`;
export const JS_AND_TS_FILES_IN_TEST_DIR = `**/__{tests,mocks}__/**/${JS_AND_TS_FILES}`;

export const JS_AND_TS_FILES_IN_BROWSER_TEST_DIR = `**/__tests__/{browser,a11y}/**/${JS_AND_TS_FILES}`;