<template>
  <q-card class="file-editor" style="width: 700px; max-width: 80vw;">
    <q-bar>
      <div class="cursor-pointer non-selectable">
        File
        <q-menu>
          <q-list dense style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section @click="this.save()">Save</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section @click="$emit('close')">Close</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>
      <div class="text-h6">{{ name }}</div>
      <q-space />
      <q-btn icon="close" flat dense @click="$emit('close')" />
    </q-bar>
    <q-card-section>
      <textarea v-model="text" id="textarea" cols="80"></textarea>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'
import Mousetrap from 'mousetrap'

export default defineComponent({
  name: 'FileEditor',

  props: {
    path: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    content: {
      type: Uint8Array,
      default: new Uint8Array()
    }
  },

  methods: {
    save () {
      this.$emit('save', { path: this.path, name: this.name, content: this.text })
    }
  },

  setup (props) {
    const dec = new TextDecoder('utf-8')
    const text = dec.decode(props.content)
    return {
      text
    }
  },

  mounted () {
    Mousetrap.bind('mod+s', (e) => {
      e.preventDefault()
      this.save()
    })
    Mousetrap(document.querySelector('#textarea')).bind('mod+s', (e) => {
      e.preventDefault()
      this.save()
    })
  }
})
</script>

<style>
  textarea {
    font-family: monospace;
    min-height: 80vh;
  }
</style>
