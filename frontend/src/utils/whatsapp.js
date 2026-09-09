// DFJJK Global WhatsApp Configuration & Helpers

// Change this number to your official DFJJK Global WhatsApp number in international format
// without '+', spaces, dashes, or parentheses (e.g. 919876543210 or 18005553355).
const rawEnvNumber = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_WHATSAPP_NUMBER)
  ? import.meta.env.VITE_WHATSAPP_NUMBER
  : '16785161391';

export const WHATSAPP_PHONE_NUMBER = rawEnvNumber.replace(/[^0-9]/g, '');

/**
 * Generates a WhatsApp chat link pre-filled with an enrollment request for a specific course.
 * @param {string} courseName - The name of the course (e.g. 'Data Science and AI')
 * @returns {string} - The encoded wa.me URL
 */
export const createWhatsAppEnrollmentLink = (courseName = 'a course') => {
  const message = `Hello DFJJK Global, I am interested in enrolling in the ${courseName} course. Please share the enrollment details.`;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a WhatsApp chat link for general inquiries from the navbar / get started button.
 * @returns {string} - The encoded wa.me URL
 */
export const createWhatsAppGeneralInquiryLink = () => {
  const message = `Hello DFJJK Global, I would like to know more about your courses and programs.`;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};
