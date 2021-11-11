<template>
  <div id="i">
    <div class="section has-background-primary has-text-centered has-text-white pt-4 top-bar-text">
      <h5 class="subtitle is-4 has-text-white is-spaced">
        Llegó el momento de juntar fuerzas para avanzar unidas!<br>
        Esta plataforma fue creada con el propósito de ampliar el potencial de las causas feministas. Explora y descubre las herramientas disponibles.
      </h5>
      <h4 class="title is-2 has-text-weight-bold has-text-white">
        “No estoy aceptando las que no puedo cambiar, estoy cambiando las cosas que no puedo aceptar”, Angela Davis
      </h4>
    </div>
    <br>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child seccion-box seccion-actuar">
          <div class="about">
            Somos una ciudadanía que se ocupa de su presente. Por eso le hablamos a lxs Congresistas, para ser incluídxs en las decisiones que guían el rumbo del país. Entra y escríbele unx a unx
          </div>
          <NuxtLink to="/actuar">
            <div class="barra">
              <h1 class="is-size-3 is-fullwidth">
                <b>ACTUAR</b>
              </h1>
              <div>
                <NuxtLink to="/actuar" class="button is-rounded is-primary is-inverted has-text-weight-bold">
                  ENTRAR
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child seccion-box seccion-conversar">
          <div class="about">
            Necesitamos diálogos fundamentados y críticos para avanzar en nuestras causas. Debate, opina y crea concesos para fortalecer las agendas temáticas.
          </div>
          <NuxtLink to="/conversar">
            <div class="barra">
              <h1 class="is-size-3 is-fullwidth">
                <b>CONVERSAR</b>
              </h1>
              <div>
                <NuxtLink to="/conversar" class="button is-rounded is-primary is-inverted has-text-weight-bold">
                  ENTRAR
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child seccion-box seccion-conectar">
          <div class="about">
            Vamos a tejer juntas. Entra a este mapeo de iniciativas feministas en Colombia y crea articulación con otras.
          </div>
          <NuxtLink to="/conectar">
            <div class="barra">
              <h1 class="is-size-3 is-fullwidth">
                <b>CONECTAR</b>
              </h1>
              <div>
                <NuxtLink to="/conectar" class="button is-rounded is-primary is-inverted has-text-weight-bold">
                  ENTRAR
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child seccion-box seccion-difundir">
          <div class="about">
            Que nadie se quede por fuera de tu causa ¡Hagamos eco para ser escuchadxs!
          </div>
          <NuxtLink to="/difundir">
            <div class="barra">
              <h1 class="is-size-3 is-fullwidth">
                <b>DIFUNDIR</b>
              </h1>
              <div>
                <NuxtLink to="/difundir" class="button is-rounded is-primary is-inverted has-text-weight-bold">
                  ENTRAR
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child seccion-box seccion-cocrear">
          <div class="about">
            Solxs no es posible! Por eso liberamos diversas metodologías para ser usadas en tu causa.
          </div>
          <NuxtLink to="/cocrear">
            <div class="barra">
              <h1 class="is-size-3 is-fullwidth">
                <b>COCREAR</b>
              </h1>
              <div>
                <NuxtLink to="/cocrear" class="button is-rounded is-primary is-inverted has-text-weight-bold">
                  ENTRAR
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child seccion-box seccion-cocrear">
          <div class="about">
            Organizate para llevar tus causas adelante! Te invitamos a crear y compartir las agendas de rus proyectos.
          </div>
          <NuxtLink to="/agendas">
            <div class="barra">
              <h1 class="is-size-3 is-fullwidth">
                <b>AGENDAS</b>
              </h1>
              <div>
                <NuxtLink to="#" class="button is-rounded is-primary is-inverted has-text-weight-bold">
                  PROXIMAMENTE
                </NuxtLink>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
    <br>
    <img src="~/assets/title01.svg" class="image mb-6 image-title" alt="">
    <!-- ocultado hasta tener info -->
    <!-- <section>
      <casos-box title="Sin mujeres  NO!" description="Redes de solidaridad y afecto como respuesta a VIOLENCIAS ECONÓMICAS y fortalecimiento de capacidades de incidencia política." to="/sinmujeresno">
        <img src="~/assets/sinmujeresno.png" alt="">
      </casos-box>
    </section> -->
    <VueSlickCarousel v-bind="settings">
      <casos-box title="PARIDAD ¡YA!" description="Campaña nacional que promueve y facilita la participación de las mujeres en política. Por lo justo: cincuenta / sí cuenta." href="https://actua.somosmuchas.org/proyecto/paridadya#activa">
        <img src="~/assets/paridad-logo.svg" alt="">
      </casos-box>
      <casos-box title="JUNTAS" description="Diálogo, intercambio y co-construcción de agendas y propuestas de mujeres progresistas de América Latina para responder de forma colectiva a la pandemia y a los efectos que tiene en la vida de las mujeres de la región" href="https://conversar.somosmuchas.org/agendas">
        <img src="~/assets/juntas-logo.png" alt="">
      </casos-box>
      <casos-box title="CAUSA JUSTA POR EL ABORTO" description="Movimiento que busca que se elimine el delito de aborto del Código Penal colombiano" href="http://causajustaporelaborto.org/">
        <img src="~/assets/logo-causa-justa.png" alt="">
      </casos-box>
      <casos-box title="Boroló" description="Iniciativa para hablar de protesta y movilización social" href="http://www.borolo.org/">
        <img src="~/assets/logo-borolo.jpeg" alt="">
      </casos-box>
      <casos-box title="Dignidad para recicladorxs" description="Redes de solidaridad y afecto como respuesta a VIOLENCIAS ECONÓMICAS y fortalecimiento de capacidades de incidencia política." href="https://activasomosmuchas.democraciaenred.org/proyecto/dignidad-para-recicladoras-y-recicladores#activa">
        <img src="~/assets/logo-recicladores.png" alt="">
      </casos-box>
    </VueSlickCarousel>
    <br>
    <section>
      <section id="paridad">
        <h5 class="title mt-5 pt-5 is-2 has-text-centered has-text-primary has-text-weight-bold">
          Paridad ¡YA!<br>Campaña nacional por la paridad política
        </h5>
        <div class="columns is-centered">
          <div class="column is-10">
            <div class="videoWrapper">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/S9pFe4lSL1w"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
        <br>
        <div class="content is-large has-text-justified">
          <p>La campaña Paridad ¡YA! cincuenta / sí cuenta busca que se redistribuya el poder y se incremente la participación y la representación de las mujeres. </p>
          <p>A pesar de ser el 52% de la población y de la Ley de Cuotas (Ley 581) aprobada en el 2000, donde se establece que la participación de las mujeres en niveles decisorios de la administración pública debe ser mínimo del 30%, para cargos de elección popular las mujeres no alcanzamos a ocupar el 30%. Solo estamos en el 12% de las Alcaldías y Concejos, el 16% de las Gobernaciones y 19% del Congreso, según la Registraduría Nacional del Estado Civil. </p>
          <p>En Argentina, México, Paraguay y Bolivia la paridad ya es ley. Llegó la hora de Colombia. </p>
          <p>En este contexto, <b>la campaña #ParidadYA es un llamado a la ciudadanía, organizaciones, colectivas y partidos políticos a unir esfuerzos para exigir la paridad</b> y recordar que la equidad en la representación política es inaplazable y beneficia a toda la sociedad en general.</p>
        </div>
        <!-- <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child">
              <div class="videoWrapper">
                <iframe
                  width="853"
                  height="480"
                  src="https://www.youtube.com/embed/S9pFe4lSL1w"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </article>
            <article class="tile is-child pl-5 video-description">
              <h1 class="title is-1 has-text-primary">
                THIS IS A TITLE AND I HOPE YOU DONT OVERFLOW IT
              </h1>
              <h4 class="subtitle is-4 has-text-primary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur odio veniam praesentium odit necessitatibus, maiores minima doloremque. Placeat magni error magnam, eligendi architecto sint sunt, odio quia quibusdam cumque accusantium?
              </h4>
            </article>
          </div>
        </div> -->
        <div class="columns">
          <div class="column is-half">
            <h5 class="mt-5 pt-5 mb-5 is-size-3 has-text-primary has-text-weight-bold">
              Información Adicional:
            </h5>
            <a href="/files/investigacion-paridad-diagramada.pdf" target="_blank" download>
              <div class="file-box p-5 my-2 has-text-left">
                <p class="has-text-primary is-size-5">La paridad en América Latina y el Caribe: Un análisis para la paridad en Colombia</p>
                <i class="fas fa-file-pdf has-text-primary fa-2x fa-fw ml-3" />
              </div>
            </a>
            <br>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScRo-_Lb20_cp2tgFrzDaPOYhUjYLAcOW8JJnMWN1gD-K0jBQ/viewform" target="_blank" class="button is-primary is-rounded is-outline is-large">Suscribirme</a>
          </div>
        </div>
      </section>
      <section id="causajusta">
        <div class="mt-5 pt-5 tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child pl-5 video-description">
              <h1 class="mt-5 pt-5 mb-5 title is-1 has-text-primary">
                CAUSA JUSTA
              </h1>
            </article>
          </div>
        </div>
        <div class="has-text-centered">
          <video width="853" height="480" controls>
            <source src="~/assets/causa-justa.mp4" type="video/mp4"></source>
            Tu navegador no soporta este tipo de videos
          </video>
        </div>
        <div class="content is-large has-text-justified">
          <p class="mt-5">
            <strong>Causa Justa</strong> es un movimiento que busca la libertad y la autonomía reproductiva de todas las mujeres sobre sus cuerpos y sus proyectos de vida. Impulsado por La Mesa por la Vida y la Salud de las Mujeres, otras organizaciones de mujeres, feministas y de derechos humanos; y diferentes actores entre quienes se encuentran activistas, prestadores de servicios de salud, referentes de la academia y centros de investigación de todo el país, Causa Justa reconoce la urgente necesidad de eliminar el delito de aborto del Código Penal como un avance para los derechos de las mujeres y un cambio favorable para la sociedad y la democracia.
            Así también busca avanzar en la despenalización social, y dar legitimidad a las decisiones libres que toman las mujeres sobre sus cuerpos, y eliminar el estigma que recae sobre ellas y sobre los prestadores de salud que realizan procedimientos de IVE.
          </p>
          <h3>
            ¿Que busca Causa Justa?
          </h3>
          <ul>
            <li>Que ninguna mujer vaya a la cárcel o que le sea iniciado un proceso penal en su contra por acceder a su derecho a la IVE ni que viva bajo esa amenaza.</li>
            <li>Que ningún prestador de servicios vaya a la cárcel o se inicie un proceso penal en su contra por realizar un aborto consentido por una mujer o por brindar información.</li>
            <li>Que todas las mujeres, en todas las circunstancias, puedan practicarse un aborto sin ser criminalizadas</li>
            <li>Evitar maternidades impuestas que despojen a las mujeres de su autonomía, del control sobre sus cuerpos ni de la definición de su proyecto de vida.</li>
            <li>Que se reconozca que el cuerpo de las mujeres no solo está ligado a la reproducción y a la maternidad, que las mujeres tienen proyectos de vida distintos y en ese sentido, que son ellas las únicas que pueden decidir si quieren tener hijos/as o no.</li>
            <li>Que se normalice la prestación de los servicios de aborto y se elimine el estigma en torno al mismo.</li>
            <li>Que se eliminen las inequidades entre las mujeres que pueden acceder y las que no, a un aborto seguro y oportuno.</li>
          </ul>
        </div>
        <div class="columns">
          <div class="column is-half">
            <h5 class="mt-5 pt-5 mb-5 is-size-3 has-text-primary has-text-weight-bold">
              Información Adicional:
            </h5>
            <a href="/files/argumentos-causajusta.pdf" target="_blank" download>
              <div class="file-box p-5 my-2 has-text-left">
                <p class="has-text-primary is-size-5">Argumentos para el debate sobre la despenalización total del aborto en Colombia</p>
                <i class="fas fa-file-pdf has-text-primary fa-2x fa-fw ml-3" />
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="borolo">
        <div class="mt-5 tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child pl-5 video-description">
              <h1 class="mt-5 pt-5 mb-5 title is-1 has-text-primary">
                Boroló
              </h1>
            </article>
          </div>
        </div>
        <div class="has-text-centered pb-5">
          <div class="videoWrapper">
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/pnv3agCpJfE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
        <div class="content is-large has-text-justified mt-5">
          <p class="pt-5">
            Boroló es el ruido. El mar de voces que hacen una sola. Declaramos que la única manera de crecimiento es el cambio.
          </p>
          <p>Que al mundo solo se lo construye en iteraciones. Que quienes somos hoy es apenas un borrador de quienes podemos ser. Reivindicamos la desobediencia civil y la protesta pacífica como vías de cambio para lograr espacios de poder de la ciudadanía y diálogo con el poder.</p>
          <p>Se ha probado en la historia que la protesta pacífica es efectiva y transformadora y sabemos que es hora de que en Colombia la ciudadanía se apropie de esta estrategia para garantizar los cambios que queremos ver.</p>
          <p>Creemos en la fuerza transformadora del discurso y la performance y, rechazamos la brutalidad del golpe y silencio.</p>
          <p>La protesta es una puesta en escena: un espacio de disputa de discursos e ideas políticas que chocan, que se modifican las unas a las otras y que crean nuevas formas de ciudadanía.</p>
          <p>Defendemos el desacuerdo y la controversia. Detrás de toda gran idea siempre hay, al menos, dos ideas contrarias que se funden en una sola. No creemos en los márgenes físicos de la protesta pacífica. Un trino indignado tiene el mismo poder que una batucada en la calle. Esta revolución también será trinada, posteada e instagrameada.</p>
          <p>Nos oponemos a la censura, al bloqueo y a la criminalización de la protesta y la movilización. Creemos que la salud de una democracia se diagnostica en las calles. Creemos en el acceso a la educación como una herramienta clave para que la ciudadanía pueda articular protestas efectivas.</p>
          <p>Armamos Boroló.</p>
          <p>Ahí donde nos quieren en silencio haremos ruido. Ahí donde el poder quiera aplastarnos estarán nuestras cacerolas. Ahí donde el cinismo y la indolencia sean política: haremos la fiesta de la protesta pacífica. Boroló, ¡Hasta que las cosas cambien!</p>
        </div>
      </section>
      <section id="recicladores">
        <div class="mt-5 tile is-ancestor mt-5 pt-5">
          <div class="tile is-parent">
            <article class="tile is-child pl-5 video-description">
              <h1 class="title is-1 has-text-primary">
                Dignidad para recicladorxs
              </h1>
            </article>
          </div>
        </div>
        <!-- <div class="has-text-centered pb-5">
          <figure class="image-recicladores">
            <img src="~/assets/logo-recicladores.png" alt="">
          </figure>
        </div> -->
        <div class="has-text-centered pb-5">
          <div class="videoWrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bTKfxyFjI0o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
        <div class="content is-large has-text-justified mt-5">
          <p class="pt-5">
            <strong>#DignidadParaRecicladorxs</strong> es una campaña con enfoque de género para visibilizar las voces de l@s recicladorxs y sus demandas, ya que es una población que a pesar de ofrecer un servicio público, se encuentra con muchas barreras para ejercer su labor de manera digna.
          </p>
        </div>
        <div class="columns">
          <div class="column is-half">
            <h5 class="mt-5 pt-5 mb-5 is-size-3 has-text-primary has-text-weight-bold">
              Información Adicional:
            </h5>
            <a href="/files/mujeres-recicladoras.pdf" target="_blank" download>
              <div class="file-box p-5 my-2 has-text-left">
                <p class="has-text-primary is-size-5">Mujeres recicladoras en Bogotá - Hojas Violeta</p>
                <i class="fas fa-file-pdf has-text-primary fa-2x fa-fw ml-3" />
              </div>
            </a>
            <h5 class="mt-5 pt-5 mb-5 is-size-3 has-text-primary has-text-weight-bold">
              Amanecer
            </h5>
            <a href="/files/amanecer.pdf" target="_blank" download>
              <div class="file-box p-5 my-2 has-text-left">
                <p class="has-text-primary is-size-5">Amanecer es un proyecto de extensión de la Maestría en Escritura Creativa del Instituto Caro y Cuervo en alianza con el proyecto “Hojas violeta” de Organización Artemisas, Fundación Avina y Fundación City. Este libro recoge los testimonios de cinco mujeres recicladoras que trabajan en la ciudad de Bogotá: Yaneth Anzola, Paula Andrea Blanco, Yuly Tatiana Donoso, Ana María Fajardo y Yazmín Lorena Pineda.</p>
                <i class="fas fa-file-pdf has-text-primary fa-2x fa-fw ml-3" />
              </div>
            </a>
            <br>
            <h5 class="mt-5 pt-5 mb-5 is-size-3 has-text-primary has-text-weight-bold">
              Mujeres recicladoras en Bogotá
            </h5>
            <a href="/files/mujeres-recicladoras.pdf" target="_blank" download>
              <div class="file-box p-5 my-2 has-text-left">
                <p class="has-text-primary is-size-5">Este documento expone el análisis de los resultados de la aplicación del instrumento diagnóstico de Hojas Violeta, un diagnóstico preliminar de las mujeres recicladoras en Bogotá en cuanto a características sociodemográficas, trabajo de cuidado remunerado y no remunerado y percepción de violencias basadas en género. Participó un grupo de 47 mujeres entre los 18 y los 80 años que hacen parte de diversas asociaciones de recicladores en Bogotá y fueron entrevistadas en Febrero de 2021.</p>
                <i class="fas fa-file-pdf has-text-primary fa-2x fa-fw ml-3" />
              </div>
            </a>
            <br>
          </div>
        </div>
      </section>
    </section>
    <br>
    <section class="articulos">
      <img src="~/assets/title05.svg" class="image mt-6 mb-6 image-titile-articles" alt="Articulos Relacionados">
      <div class="columns">
        <div class="column">
          <articles-box title="¿Quién le teme a las mujeres en la política?" author="Columnista ALEJANDRA COLL" date="14/11/2020" link="https://lasillavacia.com/silla-llena/red-de-las-mujeres/quien-le-teme-las-mujeres-la-politica-77341">
            <img src="~/assets/lasillallena.png" alt="">
          </articles-box>
        </div>
        <div class="column">
          <articles-box title="¿Quién le teme a la paridad?" author="Columnista VANESSA ROSALES" date="05/12/2020" link="https://www.elespectador.com/opinion/quien-le-teme-a-la-paridad/">
            <img src="~/assets/elespectador.png" alt="">
          </articles-box>
        </div>
        <div class="column">
          <articles-box title="¡Paridad! ¿Y las candidatas?" author="Columnista LINA MARÍA ARANGO" date="28/02/2021" link="https://www.eldiario.com.co/opinion/paridad-y-las-candidatas/">
            <img src="~/assets/eldiario.png" alt="">
          </articles-box>
        </div>
        <div class="column">
          <articles-box title="Paridad ya" author="Columnista BRIGITTE BAPTISE" date="10/12/2020" link="https://www.elespectador.com/opinion/paridad-ya/">
            <img src="~/assets/elespectador.png" alt="">
          </articles-box>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <articles-box title="Discriminación no es meritocracia" author="Editorial" date="26/03/2021" link="https://www.elespectador.com/opinion/editorial/discriminacion-no-es-meritocracia/">
            <img src="~/assets/elespectador.png" alt="">
          </articles-box>
        </div>
        <div class="column">
          <articles-box title="Pírrica, no; cortina de humo, tal vez" author="Columnista CLAUDIA PALACIOS" date="23/12/2020" link="https://www.eltiempo.com/opinion/columnistas/claudia-palacios/pirrica-no-cortina-de-humo-tal-vez-columna-de-claudia-palacios-556773">
            <img src="~/assets/eltiempo.png" alt="">
          </articles-box>
        </div>
        <div class="column">
          <articles-box title="Paridad política: un camino por recorrer" author="Columnista KAREN MARTINEZ" date="09/11/2020" link="https://www.elespectador.com/noticias/nacional/paridad-politica-un-camino-por-recorrer/">
            <img src="~/assets/elespectador.png" alt="">
          </articles-box>
        </div>
        <div class="column">
          <articles-box title="“Los partidos no le apuestan a las mujeres”: Juliana Hernández" author="Columnista NATALIA TAMAYO" date="07/10/2020" link="https://www.elespectador.com/noticias/politica/paridadya-la-campana-ciudadana-para-incidir-que-mas-mujeres-lleguen-a-puestos-de-eleccion-popular/">
            <img src="~/assets/elespectador.png" alt="">
          </articles-box>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-quarter">
          <articles-box title="Por ahora la paridad en el Congreso de Colombia seguirá siendo una ilusión" author="Editorial" date="05/11/2020" link="https://www.rollingstone.com.co/actualidad/por-ahora-la-paridad-en-el-congreso-de-colombia-seguira-siendo-una-ilusion/">
            <img src="~/assets/rollingstone.png" alt="">
          </articles-box>
        </div>
        <div class="column is-one-quarter">
          <articles-box title="“Las mujeres queremos el poder y a una feminista en la Presidencia”: Paridad ¡Ya!" author="Columnista KAREN MARTINEZ" date="27/04/2021" link="https://diariocriterio.com/2021/04/27/las-mujeres-queremos-el-poder-y-a-una-feminista-a-la-presidencia-paridad-ya/?fbclid=IwAR3-iqotKn40XVurYIeC1Jtt0rsryTqefMZaw22Wq6UZNLb-Uq43aqFt6Og">
            <img src="~/assets/criterio.png" alt="">
          </articles-box>
        </div>
        <div class="column is-one-quarter">
          <articles-box title="Paridad política en el Gobierno de Duque, ¿rabo de paja?" author="Columnista KAREN MARTINEZ" date="19/05/2021" link="https://diariocriterio.com/2021/05/19/paridad-politica-en-el-gobierno-de-duque-rabo-de-paja/">
            <img src="~/assets/criterio.png" alt="">
          </articles-box>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CasosBox from '~/components/index/CasosBox.vue'
import ArticlesBox from '~/components/index/ArticlesBox.vue'

export default {
  name: 'HomePage',
  components: {
    CasosBox,
    ArticlesBox
  },
  data () {
    return {
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.top-bar-text{
  margin-top:-5px;
}
.seccion-box{
  //padding: 1rem;
  min-height: 250px;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &.seccion-actuar{
    background-image: url('~assets/cover-bw-02.jpg');
    &:hover .about{
      opacity: 1;
    }
  }
  &.seccion-conversar{
    background-image: url('~assets/cover-bw-01.jpg');
    &:hover .about{
      opacity: 1;
    }
  }
  &.seccion-conectar{
    background-image: url('~assets/cover-bw-03.jpg');
    &:hover .about{
      opacity: 1;
    }
  }
  &.seccion-difundir{
    background-image: url('~assets/cover-bw-05.jpg');
    &:hover .about{
      opacity: 1;
    }
  }
  &.seccion-cocrear{
    background-image: url('~assets/cover-bw-04.jpg');
    &:hover .about{
      opacity: 1;
    }
  }
  .about{
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
    padding: 35px;
    background-color: rgba(darken($primary,25%), 0.7);
    opacity: 0;
    color: #FFF;
    transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -webkit-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
    font-size: $size-4;
    font-weight: 300;
    overflow-y: hidden;
  }
  .barra{
    background-color: rgba(darken($primary,10%), 0.7);
    padding: 6px 15px;
    color: #FFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
.image-title {
  width: 400px;
}
.image-titile-articles {
  margin-left: auto;
}
// class section for conversar
.is-custom-image {
  background-image: url("~assets/cover-color-01.jpg");
  background-position: center center;
  background-size: cover;
  .title {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  .title {
    color: $primary;
  }
}
.subtitle-container {
  padding: 20px;
  background-color: rgba(#ffe6d6, 0.5);
}
.image-title {
  width: 400px;
}
.it-was-selected {
  border: 2px solid $secondary;
}
.agenda-box {
  height: 250px;
  margin: 10px;
  border: 2px solid $secondary;
  position: relative;
  img {
    max-height: 60%;
    max-width: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
  }
  .enter-button {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 150;
  }
}
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-description {
  .title {
    font-size: 4rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.an-icon {
  width: 150px;
  margin: 0 auto 20px;
}
.file-box {
  border: 1px solid $primary;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
@include from($desktop) {
  .image-recicladores img {
    max-width: 50%;
    max-height: 50%;
  }
}

#navbar .title{
  color: #000;
}
</style>
