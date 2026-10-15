/*
  Talks to your existing backend.

  1. Set VITE_API_URL in .env (see .env.example).
  2. If your routes are named differently, change ENDPOINTS below.
  3. If your JSON fields are named differently, adjust the normalize* helpers.

  Every GET falls back to the sample content in data/content.js
  when the backend is unreachable, so the site never shows a blank page.
*/
import {
  projects as fallbackProjects,
  services as fallbackServices,
  experience as fallbackExperience,
  certificates as fallbackCertificates,
} from '../data/content';
const BASE = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');
const ORIGIN = BASE.startsWith('http') ? new URL(BASE).origin : '';

export const USE_BACKEND = import.meta.env.VITE_USE_BACKEND !== 'false';

export const ENDPOINTS = {
  projects: '/projects',
  services: '/services',
  experience: '/experience',
  certificates: '/certificates',
  contact: '/contact', // POST { name, email, message }
};

async function request(path, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(`${BASE}${path}`, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      signal: controller.signal,
    });

    const text = await res.text();
    const json = text ? JSON.parse(text) : null;

    if (!res.ok) {
      const message = (json && (json.message || json.error)) || `Request failed (${res.status})`;
      throw new Error(message);
    }
    return json;
  } finally {
    clearTimeout(timer);
  }
}

// Accepts [..], { data: [..] }, { projects: [..] } and similar shapes.
function toList(json, key) {
  if (Array.isArray(json)) return json;
  if (!json) return [];
  if (Array.isArray(json.data)) return json.data;
  if (key && Array.isArray(json[key])) return json[key];
  if (json.data && key && Array.isArray(json.data[key])) return json.data[key];
  return [];
}

const toArray = (v) =>
  Array.isArray(v) ? v : typeof v === 'string' ? v.split(',').map((s) => s.trim()).filter(Boolean) : [];

const assetUrl = (url) => {
  if (!url) return '';
  if (/^(https?:|data:)/.test(url)) return url;
  return `${ORIGIN}${url.startsWith('/') ? '' : '/'}${url}`;
};

const normalizeProject = (p) => ({
  title: p.title || p.name || 'Untitled project',
  description: p.description || p.summary || '',
  tags: toArray(p.tags || p.technologies || p.techStack || p.stack),
  liveUrl: p.liveUrl || p.live || p.demo || p.link || '',
  githubUrl: p.githubUrl || p.github || p.repo || p.repository || '',
  image: assetUrl(p.image || p.thumbnail || p.cover || ''),
});

const normalizeService = (s) => ({
  icon: s.icon || 'code',
  title: s.title || s.name || '',
  description: s.description || '',
});

const normalizeExperience = (e) => ({
  role: e.role || e.title || e.position || '',
  company: e.company || e.organization || '',
  period:
    e.period ||
    [e.startDate, e.current ? 'Present' : e.endDate].filter(Boolean).join(' to '),
  points: toArray(e.points || e.responsibilities || e.highlights || e.description),
});

const normalizeCertificate = (c) => ({
  title: c.title || c.name || '',
  issuer: c.issuer || c.organization || c.platform || '',
  year: c.year || c.date || '',
  url: c.url || c.link || c.credentialUrl || '',
});

export const getProjects = async () => {
  if (!USE_BACKEND) return fallbackProjects;

  try {
    return toList(
      await request(ENDPOINTS.projects),
      'projects'
    ).map(normalizeProject);
  } catch (error) {
    console.warn('Projects API unavailable; using local data.', error);
    return fallbackProjects;
  }
};

export const getServices = async () => {
  if (!USE_BACKEND) return fallbackServices;

  try {
    return toList(
      await request(ENDPOINTS.services),
      'services'
    ).map(normalizeService);
  } catch (error) {
    console.warn('Services API unavailable; using local data.', error);
    return fallbackServices;
  }
};

export const getExperience = async () => {
  if (!USE_BACKEND) return fallbackExperience;

  try {
    return toList(
      await request(ENDPOINTS.experience),
      'experience'
    ).map(normalizeExperience);
  } catch (error) {
    console.warn('Experience API unavailable; using local data.', error);
    return fallbackExperience;
  }
};

export const getCertificates = async () => {
  if (!USE_BACKEND) return fallbackCertificates;

  try {
    return toList(
      await request(ENDPOINTS.certificates),
      'certificates'
    ).map(normalizeCertificate);
  } catch (error) {
    console.warn('Certificates API unavailable; using local data.', error);
    return fallbackCertificates;
  }
};

export const sendMessage = (payload) =>
  request(ENDPOINTS.contact, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
