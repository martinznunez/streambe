export const formatDate = (data) => {
  const formatDate = new Date(data);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };



  return formatDate.toLocaleDateString("es-ES", options);
};
