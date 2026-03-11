import { useState, useEffect } from 'react';

/**
 * useFaculty Hook
 * 
 * Custom hook to fetch and manage faculty profile data.
 * Handles loading states, error reporting, and data formatting.
 * 
 * @param {string} email - The faculty email to fetch (used as unique identifier)
 * @returns {Object} { data, loading, error, refetch }
 */
export const useFaculty = (email) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFaculty = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Using global API endpoint for faculty data
      const response = await fetch(`https://admin.nitp.ac.in/api/faculty?type=${email}`);
      
      if (!response.ok) {
        throw new Error(`Technical error (Status: ${response.status}). Please try again later.`);
      }

      const json = await response.json();
      
      // Basic validation of API response structure
      if (!json || !json.profile) {
        throw new Error("The requested faculty profile could not be found.");
      }

      setData(json);
    } catch (err) {
      setError(err.message);
      console.error("[useFaculty] Fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email) fetchFaculty();
  }, [email]);

  return { data, loading, error, refetch: fetchFaculty };
};
