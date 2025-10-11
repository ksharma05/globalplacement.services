import { createSlice } from '@reduxjs/toolkit';
import { siteContent } from '../../config/siteContent';

/**
 * Content Redux Slice
 * 
 * Manages all website content through Redux store.
 * Provides centralized access to site content across all components.
 * 
 * @version 1.0.0
 */

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    data: siteContent,
    loading: false,
    error: null
  },
  reducers: {
    // Future: Add actions for dynamic content updates
    setContent: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    // Future: Add action to update specific content sections
    updateContentSection: (state, action) => {
      const { section, data } = action.payload;
      state.data[section] = { ...state.data[section], ...data };
    }
  }
});

// Export actions
export const { setContent, setLoading, setError, updateContentSection } = contentSlice.actions;

// Export selectors for easy access to specific content sections
export const selectContent = (state) => state.content.data;
export const selectLoading = (state) => state.content.loading;
export const selectError = (state) => state.content.error;

// Specific content selectors
export const selectCompany = (state) => state.content.data.company;
export const selectContact = (state) => state.content.data.contact;
export const selectStats = (state) => state.content.data.stats;
export const selectHero = (state) => state.content.data.hero;
export const selectServices = (state) => state.content.data.services;
export const selectVerticals = (state) => state.content.data.verticals;
export const selectWhyChooseUs = (state) => state.content.data.whyChooseUs;
export const selectProcess = (state) => state.content.data.process;
export const selectTeam = (state) => state.content.data.team;
export const selectValues = (state) => state.content.data.values;
export const selectTimeline = (state) => state.content.data.timeline;
export const selectAchievements = (state) => state.content.data.achievements;
export const selectSocial = (state) => state.content.data.social;
export const selectTrustIndicators = (state) => state.content.data.trustIndicators;
export const selectFaqs = (state) => state.content.data.faqs;
export const selectCtas = (state) => state.content.data.ctas;
export const selectPolicies = (state) => state.content.data.policies;

export default contentSlice.reducer;
