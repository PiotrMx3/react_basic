const Home = () => {
  return (
    <>
      <article
        style={{
          display: "flex",
          alignItems: "center",
          padding: "2rem",
          gap: "2rem",
        }}
      >
        <section
          style={{
            flex: "2",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img width={"200px"} src="/image.png" alt="profesor" />
        </section>
        <section
          style={{
            flex: "8",
            lineHeight: "6rem",
            fontSize: "2rem",
            fontWeight: "100",
            wordSpacing: "1rem",
            textAlign: "center",
          }}
        >
          <p>
            Hello there! Welcome to the world of POKEMON! <br /> My name is OAK!
            People call me the POKEMON PROF! <br /> This world is inhabited by
            creatures called POKEMON! <br /> For some people, POKEMON are pets.
            Others use them for fights. Myself...I study POKEMON as a
            profession.
          </p>
        </section>
      </article>
    </>
  );
};

export default Home;
