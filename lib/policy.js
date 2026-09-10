export const MODEL_REGISTRY = [
  { id: 'deterministic', provider: 'noeprax', billing: 'free', quality: 2, privacy: 'local', tools: true, reasoning: false },
  { id: 'openrouter/free', provider: 'openrouter', billing: 'free', quality: 3, privacy: 'provider-dependent', tools: true, reasoning: true },
  { id: 'gemini-3.5-flash-free', provider: 'google', billing: 'free', quality: 3, privacy: 'public-only', tools: true, reasoning: true },
  { id: 'deepseek-v4-flash', provider: 'deepseek', billing: 'paid-low', quality: 4, privacy: 'paid-policy', tools: true, reasoning: true },
  { id: 'gpt-5.6-luna', provider: 'openai', billing: 'paid-low', quality: 4, privacy: 'paid-policy', tools: true, reasoning: true },
  { id: 'deepseek-v4-pro', provider: 'deepseek', billing: 'paid-mid', quality: 5, privacy: 'paid-policy', tools: true, reasoning: true },
  { id: 'gpt-5.6-terra', provider: 'openai', billing: 'paid-mid', quality: 5, privacy: 'paid-policy', tools: true, reasoning: true },
  { id: 'gpt-5.6-sol', provider: 'openai', billing: 'paid-premium', quality: 6, privacy: 'paid-policy', tools: true, reasoning: true }
];

export function selectModel({ entitlement = 'free', complexity = 1, sensitive = false, freeProviderAvailable = false }) {
  if (entitlement === 'free') {
    if (sensitive) return MODEL_REGISTRY[0];
    if (freeProviderAvailable) return MODEL_REGISTRY.find(m => m.id === 'openrouter/free');
    return MODEL_REGISTRY[0];
  }
  if (complexity >= 5) return MODEL_REGISTRY.find(m => m.id === 'gpt-5.6-sol');
  if (complexity >= 4) return MODEL_REGISTRY.find(m => m.id === 'deepseek-v4-pro');
  if (complexity >= 2) return MODEL_REGISTRY.find(m => m.id === 'gpt-5.6-luna');
  return MODEL_REGISTRY.find(m => m.id === 'deepseek-v4-flash');
}

export function enforcePaidTokenGate({ entitlement, model }) {
  const isPaidModel = model.billing.startsWith('paid');
  return !(entitlement === 'free' && isPaidModel);
}
