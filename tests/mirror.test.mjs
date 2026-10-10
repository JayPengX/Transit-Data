import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slim } from '../mirror.mjs';

test("a game's copy keeps its commentary (Sports' 過程) and drops what no app reads", () => {
  const s = slim({ commentary: [{ text: 'Attempt saved.', play: { type: { type: 'shot-on-target' } } }], news: [{ x: 1 }], header: { links: [1], id: '9' } });
  assert.equal(s.commentary.length, 1);
  assert.equal(s.commentary[0].play.type.type, 'shot-on-target');
  assert.equal(s.news, undefined);
  assert.deepEqual(s.header, { id: '9' });
});
