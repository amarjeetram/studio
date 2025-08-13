'use server';
/**
 * @fileOverview Enhances inspirational messages for the About/Mission/Vision section content.
 *
 * - enhanceInspirationalMessages - A function that suggests personalized, inspirational messages.
 * - EnhanceInspirationalMessagesInput - The input type for the enhanceInspirationalMessages function.
 * - EnhanceInspirationalMessagesOutput - The return type for the enhanceInspirationalMessages function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceInspirationalMessagesInputSchema = z.object({
  content: z.string().describe('The original content of the About/Mission/Vision section.'),
});
export type EnhanceInspirationalMessagesInput = z.infer<typeof EnhanceInspirationalMessagesInputSchema>;

const EnhanceInspirationalMessagesOutputSchema = z.object({
  enhancedMessage: z.string().describe('The personalized, inspirational message to display.'),
});
export type EnhanceInspirationalMessagesOutput = z.infer<typeof EnhanceInspirationalMessagesOutputSchema>;

export async function enhanceInspirationalMessages(input: EnhanceInspirationalMessagesInput): Promise<EnhanceInspirationalMessagesOutput> {
  return enhanceInspirationalMessagesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceInspirationalMessagesPrompt',
  input: {schema: EnhanceInspirationalMessagesInputSchema},
  output: {schema: EnhanceInspirationalMessagesOutputSchema},
  prompt: `You are an AI assistant designed to enhance the inspirational quality of content for the About/Mission/Vision section of a network.

  Your goal is to make the content more engaging and aligned with the network's values, focusing on themes like 'people-first', 'direct selling', 'mentorship', and 'financial freedom'. Maintain a tonality consistent with motivational business content.

  Original Content: {{{content}}}

  Enhanced Inspirational Message:`,
});

const enhanceInspirationalMessagesFlow = ai.defineFlow(
  {
    name: 'enhanceInspirationalMessagesFlow',
    inputSchema: EnhanceInspirationalMessagesInputSchema,
    outputSchema: EnhanceInspirationalMessagesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
