// Basic usage example for enterprise-ai-dashboard
import { EnterpriseAiDashboard } from "../src/core.js";

async function main() {
  const instance = new EnterpriseAiDashboard({ verbose: true });

  console.log("=== enterprise-ai-dashboard Example ===\n");

  // Run primary operation
  const result = await instance.detect({ input: "example data", mode: "demo" });
  console.log("Result:", JSON.stringify(result, null, 2));

  // Run multiple operations
  const ops = ["detect", "scan", "monitor];
  for (const op of ops) {
    const r = await (instance as any)[op]({ source: "example" });
    console.log(`${op}:`, r.ok ? "✓" : "✗");
  }

  // Check stats
  console.log("\nStats:", JSON.stringify(instance.getStats(), null, 2));
}

main().catch(console.error);
