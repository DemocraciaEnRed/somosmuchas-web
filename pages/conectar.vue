<template>
  <section>
    <div class="hero is-primary is-medium is-custom-image mt-2">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 has-text-weight-bold">
              CONECTAR
            </h1>
            <div class="subtitle-container">
              <h2 class="subtitle is-4 has-text-primary">
                Aquí conocerás iniciativas feministas que se están desarrollando actualmente.
                Explora y conecta con otras.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <section v-if="dataLoaded">
      <Mapper :sheet-data="data" />
      <br>
      <div class="box">
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>{{ data.length }}</strong> iniciativas
              </p>
            </div>
            <div class="level-item">
              <div class="field has-addons">
                <div class="control has-icons-left">
                  <div class="select is-small">
                    <select v-model="selectedCategory">
                      <option :value="null">
                        - Todas las categorias -
                      </option>
                      <option value="Violencias Basadas en Género / Rutas de atención">
                        Violencias Basadas en Género / Rutas de atención
                      </option>
                      <option value="Pedagogía feminismos / Educación popular feminista">
                        Pedagogía feminismos / Educación popular feminista
                      </option>
                      <option value="Derechos sexuales y reproductivos / Interrupción voluntaria del embarazo">
                        Derechos sexuales y reproductivos / Interrupción voluntaria del embarazo
                      </option>
                      <option value="Producción de contenidos feministas (Medio de comunicación)">
                        Producción de contenidos feministas (Medio de comunicación)
                      </option>
                      <option value="Incidencia política">
                        Incidencia política
                      </option>
                      <option value="Visibilización y promoción de los derechos de las mujeres">
                        Visibilización y promoción de los derechos de las mujeres
                      </option>
                      <option value="Movilización ciudadana">
                        Movilización ciudadana
                      </option>
                      <option value="Participación política electoral">
                        Participación política electoral
                      </option>
                      <option value="Producción artística feminista / Cultura">
                        Producción artística feminista / Cultura
                      </option>
                    </select>
                  </div>
                  <span class="icon is-left">
                    <i class="fas fa-tag" />
                  </span>
                </div>
              </div>
            </div>
            <div class="level-item">
              <div class="field">
                <b-checkbox v-model="titleSearchable">
                  Buscar por nombre
                </b-checkbox>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <b-table
        :data="tableData"
        narrowed
        paginated
        pagination-size="is-small"
        :debounce-search="800"
        :per-page="10"
      >
        <b-table-column field="title" sortable :searchable="titleSearchable" label="Nombre" width="200px">
          <template
            #searchable="props"
          >
            <b-input
              v-model="props.filters['title']"
              placeholder="Escriba el nombre"
              icon="search"
              size="is-small"
            />
          </template>
          <template v-slot="props">
            <p class="has-text-weight-bold">
              {{ props.row.title }}
            </p>
          </template>
        </b-table-column>
        <b-table-column v-slot="props" field="category" sortable label="Categoria" width="200px">
          <i class="fas fa-square" :style="`color: ${props.row.color}`" />&nbsp;&nbsp;{{ props.row.category }}
        </b-table-column>
        <b-table-column v-slot="props" field="category" centered label="Mapa">
          <i v-if="props.row.lat" class="fas fa-map-marker has-text-primary fa-fw" />
          <i v-else class="fas fa-times has-text-danger" />
        </b-table-column>
        <b-table-column v-slot="props" field="description" label="Acerca de">
          <p class="is-size-7">
            {{ props.row.description }}
          </p>
        </b-table-column>
        <b-table-column v-slot="props" field="country" label="Pais">
          {{ props.row.country || '(Digital)' }}
        </b-table-column>
        <b-table-column v-slot="props" field="city" label="Ciudad">
          {{ props.row.city || '-' }}
        </b-table-column>
        <b-table-column v-slot="props" field="contact" label="Contacto" width="200px">
          {{ props.row.contact }}
        </b-table-column>
      </b-table>
    </section>
    <section v-else>
      <b-skeleton height="500px" animated :rounded="false" />
      <br>
      <br>
      <div class="box">
        <b-skeleton animated height="45px" />
      </div>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th width="200">
              <b-skeleton animated />
            </th>
            <th width="200">
              <b-skeleton animated />
            </th>
            <th>
              <b-skeleton animated />
            </th>
            <th>
              <b-skeleton animated />
            </th>
            <th width="200">
              <b-skeleton animated />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="5">
              <b-skeleton height="20px" animated />
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <b-skeleton height="20px" animated />
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <b-skeleton height="20px" animated />
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <b-skeleton height="20px" animated />
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <b-skeleton height="20px" animated />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <!-- Right side -->
    <!-- <div class="level-right">
        <p class="level-item">
          <a class="button is-primary"><i class="fas fa-times" /></a>
        </p>
      </div> -->
  </section>
</template>

<script>
// import Mapper from '~/components/conectar/Mapper'

export default {
  // components: {
  //   Mapper
  // },
  data () {
    return {
      data: null,
      dataLoaded: false,
      isLoading: false,
      errorLoading: false,
      selectedCategory: null,
      titleSearchable: false,
      keys: [
        'title',
        'description',
        'country',
        'city',
        'lat',
        'long',
        'category',
        'color',
        'contact',
        'comments'
      ]
    }
  },
  computed: {
    tableData () {
      if (!this.data.length) { return [] }
      if (this.selectedCategory) { return this.data.filter(row => row.category === this.selectedCategory) }
      return this.data
    }
  },
  mounted () {
    this.$axios.get('https://sheets.googleapis.com/v4/spreadsheets/196JdRVKPOkK8ZyY9X_Wdm7cEFNiqs3wL5_LChUr7U9U/values/mapeo', {
      params: { key: this.$config.googleSheetsApiKey }
    })
      .then((res) => {
        this.data = this.extractData(res.data)
      })
      .then(() => {
        this.dataLoaded = true
      })
  },
  methods: {
    extractData (data) {
      // eslint-disable-next-line prefer-const
      let output = []
      const theKeys = data.values[0]
      const theValues = data.values.slice(1)
      theValues.forEach((entry) => {
        // eslint-disable-next-line prefer-const
        const marker = {}
        theKeys.forEach((k, i) => {
          marker[k] = entry[i] !== '' ? entry[i] : null
        })
        output.push(marker)
      })
      return output
    }
  }
}
</script>

<style lang="scss" scoped>
.is-custom-image{
    background-image: url('~assets/cover-color-03.jpg');
    background-position: center center;
    background-size: cover;
}
.subtitle-container{
  padding: 20px;
  background-color: rgba(#ffe6d6,0.5);
}
</style>
