function Category({ params }) {
  return (
    <>
      <p>catch all segment route</p>
      <p>{params.category[0]}</p>
      <p>{params.category[1]}</p>
      <p>{params.category[2]}</p>
    </>
  );
}

export default Category;

// jo product ni pachal ek slash hoy to te id ma jase.
// jo product ni pachal be slash avi jay to te [...category] ma jase.