import { Selector } from "testcafe";
import fs from "fs";

fixture(`Test multiple files`).page(`http://localhost:7777/`);

test("Can download three files", async t => {
  await t
    .click(Selector("a").nth(0))
    .click(Selector("a").nth(1))
    .click(Selector("a").nth(2))
    .wait(5000);
});
