await Bun.build({
	entrypoints: [
		"src/index.ts",
		"src/commands/utility/ping.ts",
		"src/commands/utility/server.ts",
		"src/commands/utility/user.ts",
	],
	outdir: "./dist",
	target: "node",
	env: "inline",
});
