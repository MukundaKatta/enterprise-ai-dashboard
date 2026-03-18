import { describe, it, expect } from "vitest";
import { DashboardManager } from "../src/dashboardManager.js";

describe("DashboardManager", () => {
  it("initializes", () => {
    const instance = new DashboardManager();
    expect(instance.getStats().totalOps).toBe(0);
  });

  it("tracks operations", async () => {
    const instance = new DashboardManager();
    await instance.getoverview();
    expect(instance.getStats().totalOps).toBe(1);
  });

  it("resets state", async () => {
    const instance = new DashboardManager();
    await instance.getoverview();
    instance.reset();
    expect(instance.getStats().totalOps).toBe(0);
  });
});
