import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'data/db.json',
});

export async function getEntireMenuData() {
  try {
    const response = await apiClient.get('');
    return response.data;
  } catch (error) {
    console.error("API Error: Failed to fetch entire menu from db.json:", error);
    throw new Error('Failed to fetch menu data. Please check console for details.');
  }
}

export async function getAppetizers() {
  try {
    const response = await apiClient.get('');
    return response.data.appetizers;
  } catch (error) {
    console.error("API Error: Failed to fetch appetizers:", error);
    throw new Error('Failed to fetch appetizers. Please check console for details.');
  }
}

export async function getMainCourses() {
  try {
    const response = await apiClient.get('');
    return response.data.main;
  } catch (error) {
    console.error("API Error: Failed to fetch main courses:", error);
    throw new Error('Failed to fetch main courses. Please check console for details.');
  }
}

export async function getDesserts() {
  try {
    const response = await apiClient.get('');
    return response.data.desserts;
  } catch (error) {
    console.error("API Error: Failed to fetch desserts:", error);
    throw new Error('Failed to fetch desserts. Please check console for details.');
  }
}

export async function getBeverages() {
  try {
    const response = await apiClient.get('');
    return response.data.beverages;
  } catch (error) {
    console.error("API Error: Failed to fetch beverages:", error);
    throw new Error('Failed to fetch beverages. Please check console for details.');
  }
}