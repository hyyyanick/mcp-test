import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
    name: "MCP Test Server",
    version: "1.0.0"
});

server.tool("add",
    {a: z.number(), b: z.number()},
    ({a, b}) => ({
        content: [{type: "text", text: `The sum of ${a} and ${b} is ${a + b}`}],
    })
);

const transport = new StdioServerTransport()
await server.connect(transport);