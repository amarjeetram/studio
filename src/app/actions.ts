"use server";

import { enhanceInspirationalMessages } from '@/ai/flows/enhance-inspirational-messages';

export async function getEnhancedMessage(content: string) {
  try {
    const result = await enhanceInspirationalMessages({ content });
    return result.enhancedMessage;
  } catch (error) {
    console.error(error);
    return "Failed to enhance message. Embrace every challenge as an opportunity for growth.";
  }
}
