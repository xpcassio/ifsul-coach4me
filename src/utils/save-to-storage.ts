export const allFavoriteLocalStorage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  return favorites;
};

export const saveFavoriteLocalStorage = (coachId: number) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (!favorites.includes(coachId)) {
    favorites.push(coachId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Treinador adicionado aos favoritos!");
  } else {
    alert("Treinador já está nos favoritos.");
  }
};

export const removeFavoriteLocalStorage = (coachId: number) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const index = favorites.indexOf(coachId);
  if (index > -1) {
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Treinador removido dos favoritos!");
  } else {
    alert("Treinador não está nos favoritos.");
  }
};

export const isFavoriteLocalStorage = (coachId: number): boolean => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  return favorites.includes(coachId);
};
