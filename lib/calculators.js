export function automationROI({ hoursPerWeek, hourlyCost, automationRate, monthlyToolCost = 0, setupCost = 0 }) {
  const monthlyHours = Number(hoursPerWeek) * 4.33;
  const rate = Math.min(Math.max(Number(automationRate), 0), 100) / 100;
  const hoursSaved = monthlyHours * rate;
  const grossValue = hoursSaved * Number(hourlyCost);
  const monthlyNet = grossValue - Number(monthlyToolCost);
  const annualNet = monthlyNet * 12 - Number(setupCost);
  const paybackMonths = monthlyNet > 0 ? Number(setupCost) / monthlyNet : null;
  return { monthlyHours, hoursSaved, grossValue, monthlyNet, annualNet, paybackMonths };
}
export function missedLeadValue({ leadsPerMonth, lateOrMissedPct, qualifiedPct, valuePerQualifiedLead }) {
  const missed = Number(leadsPerMonth) * Number(lateOrMissedPct) / 100;
  const qualified = missed * Number(qualifiedPct) / 100;
  const value = qualified * Number(valuePerQualifiedLead);
  return { missed, qualified, value };
}
export function stackSavings({ currentMonthly, recommendedMonthly, setupCost = 0 }) {
  const monthlySavings = Number(currentMonthly) - Number(recommendedMonthly);
  const annualSavings = monthlySavings * 12 - Number(setupCost);
  const paybackMonths = monthlySavings > 0 ? Number(setupCost) / monthlySavings : null;
  return { monthlySavings, annualSavings, paybackMonths };
}
