export const useGetUserinfo = () => {
  // Try to get user info, or return default values
  const userData = JSON.parse(localStorage.getItem("auth")) || {};

  return {
    name: userData.name || "User",
    profilePhoto: userData.profilePhoto || "https://via.placeholder.com/150",
    userId: userData.userId || null,
    isAuth: userData.isAuth || false,
  };
};
