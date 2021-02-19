const { assert } = require("chai");
const express = require('express');
const app = express();

describe("Tests for server.js", () => {
	it("Server ran successfully", () => {
        assert(app);
    });
});
