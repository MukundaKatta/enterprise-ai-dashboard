import { describe, it, expect } from "vitest";
import { EnterpriseAiDashboard } from "../src/core.js";
describe("EnterpriseAiDashboard", () => {
  it("init", () => { expect(new EnterpriseAiDashboard().getStats().ops).toBe(0); });
  it("op", async () => { const c = new EnterpriseAiDashboard(); await c.detect(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new EnterpriseAiDashboard(); await c.detect(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
