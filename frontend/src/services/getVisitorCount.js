const getVisitorCount = () => {
  const fetchVisitorCount = async () => {
    try {
      const response = await fetch(
        "https://ay9503fh5m.execute-api.us-east-1.amazonaws.com/dev/getVisitorCount"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch visitor count");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching visitor count:", error);
    }
  };

  return fetchVisitorCount();
};

export default getVisitorCount;
