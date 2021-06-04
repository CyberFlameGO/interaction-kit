/**
 * These type definitions come from the official Discord API docs. They should
 * be defined with references back to the documentation section.
 */

// https://discord.com/developers/docs/reference#snowflakes-snowflake-id-format-structure-left-to-right
export const EPOCH = 1420070400000;

// https://discord.com/developers/docs/reference#snowflakes
export type Snowflake = `${bigint}`;
