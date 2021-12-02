<template>
  <aside class="d-flex align-items-end flex-column w-100 " id="guitar-detail">
    <section class="d-flex align-items-sm-end w-100 justify-content-sm-between">
      <section class="px-2 bg-white">
        <div class="d-flex flex-column mr-sm-5  mr-sm-auto bg-white position-relative">
          <img v-if="active.isDefault" alt="" class="guitar-img bg-white m-5" src="@/assets/guitar/full.svg">
          <img v-else alt="" class="guitar-img bg-white m-5" :src="active.getPartImage">
          <div v-for="item in convertedComponents" :key="item.getPartName"
            class="items-components"
            @click="activeComponent(item)"
            :class="{ active: active === item, [item.getPartName]:true }">
            <div class="outer-circle">
              <div class="inner-circle" />
            </div>
            <span>{{ item.getPartName }}</span>
          </div>
        </div>
      </section>
      <section id="components-guitar">
        <ul v-if="isWeb()">
          <li v-for="item in convertedComponents" :key="item.getPartName"
              @click="activeComponent(item)"
              :class="{ active: active === item }">
            <span>{{ item.getPartName }}</span>
          </li>
        </ul>
        <ul v-else>
          <li v-for="item in convertedComponents" :key="item.getPartName"
              data-toggle="modal" data-target="#exampleModal"
              data-whatever="@getbootstrap"
              @click="activeComponent(item)"
              :class="{ active: active === item }">
            <span>{{ item.getPartName }}</span>
          </li>
        </ul>
      </section>
    </section>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content p-0 m-0">
          <div class="modal-body p-0 m-0">
            <Sides class="p-4" :item="active" />
            <div class="close-dialog py-4" data-dismiss="modal">Close</div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { ref, SetupContext } from "vue"
import Sides from "@/components/Sides.vue";
import data from "@/data/guitar.json";
import SideDataFactory from '@/domain/service/SideDataFactory';
import SideData from '@/domain/model/SideData';

export default {
  name: "Guitar",
  emits: [ 'itemSelected' ],
  components: {
    Sides
  },
  setup(_: unknown, { emit }: SetupContext): Record<string,unknown> {
    const active = ref()

    const items = data.data.attributes.items

    const getItemByTitle = (title: string): any => {
      return items.find(item => item.attributes.customAttributes.partName === title)
    }

    const isWeb = () => {
      return window.innerWidth > 800
    }

    const components = [
      { title: "headplate", img: require('@/assets/guitar/headplate.svg'), data: {}, default: false },
      { title: "fingerboard", img: require('@/assets/guitar/fingerboard.svg'), data: {}, default: false },
      { title: "heel", img: require('@/assets/guitar/heel.svg'), data: {}, default: false },
      { title: "bridge", img: require('@/assets/guitar/bridge.svg'), data: {}, default: false },
      { title: "top", img: require('@/assets/guitar/top.svg'), data: {}, default: false },
      { title: "neck", img: require('@/assets/guitar/neck.svg'), data: {}, default: false },
      { title: "back", img: require('@/assets/guitar/back.svg'), data: {}, default: false },
      { title: "side", img: require('@/assets/guitar/sides.svg'), data: {}, default: false }
    ]

    let convertedComponents: Array<SideData>;

    components.map(item => {
      item.data = getItemByTitle(item.title)
    })

    convertedComponents = components.map(item => SideDataFactory.fromJson(item))

    const activeComponent = (item: any): void => {
      emit('itemSelected', item)
      active.value = item == active.value ? null : item
    }

    activeComponent(SideDataFactory.getDefault());

    return {
      convertedComponents,
      active,
      isWeb,
      activeComponent,
    }
  }
}
</script>

<style lang="scss">

#guitar-detail {
  cursor: pointer;
}

#components-guitar {
  ul {
    list-style-type: none;
    text-transform: capitalize;
    color: white;
    margin: 0;
    padding: 0;

    li {
      padding: 10px 20px;
      width: 152px;

      &.active {
        color: black;
        //background: white; z
        border: 4px solid var(--main-bg-color);
        background: url(../assets/rectangle-selected.svg) !important;
        background-size: cover; /* <------ */
        background-repeat: no-repeat;
        background-position: center center;
        width: 152px;


      }

    }

  }
}

#guitar-detal {
  justify-content: space-between;
}

.close-dialog {
  background: rgba(#6A3534, .1);
  color: var(--main-bg-color);
  text-transform: uppercase;
  text-align: center;
  width: 100%;
}

.guitar-img {
  width: 230px;
  //min-width: 143px;
}

.border-dotted-line {
  border-bottom: 2px dashed rgba(#6A3534, 0.5);
}


.outer-circle {
  background: rgba(#6A3534, 0.2);
  border-radius: 50%;
  height: 20px;
  width: 20px;
  position: relative;

  .inner-circle {
    position: absolute;
    background: var(--main-bg-color);
    border-radius: 50%;
    height: 10px;
    width: 10px;

    top: 50%;
    left: 50%;
    margin: -5px 0px 0px -5px;

  }
}

.outer-circle-left {
  position: absolute;
  bottom: -10px;
  left: -10px;
}

.outer-circle-right {
  position: absolute;
  bottom: -10px;
  right: -10px;
}

.items-components {
  position: absolute;
  text-transform: capitalize;
  color: rgba(#6A3534, 0.5) !important;

  .outer-circle {
    opacity: .5;
  }

  &.active {
    .outer-circle {
      opacity: 1;
    }

    span {
      color: #6A3534;
      font-weight: bold;
    }

    border-color: #6A3534;
  }

  &.default {
    display: none;
  }

  &.headplate {
    right: 0;
    top: 10%;
    width: 30%;
    text-align: right;
    @extend .border-dotted-line;

    .outer-circle {
      @extend .outer-circle-left;
    }
  }

  &.neck {
    left: 0;
    top: 12%;
    width: 65%;
    text-align: left;
    @extend .border-dotted-line;

    .outer-circle {
      @extend .outer-circle-right;
    }
  }

  &.fingerboard {
    left: 0;
    top: 20%;
    width: 60%;
    text-align: left;
    @extend .border-dotted-line;

    .outer-circle {
      @extend .outer-circle-right;
    }
  }

  &.heel {
    right: 0;

    top: 45%;
    width: 40%;
    text-align: right;
    @extend .border-dotted-line;

    .outer-circle {
      @extend .outer-circle-left;
    }
  }

  &.side {
    right: 0;
    top: 55%;
    width: 20%;
    text-align: right;
    @extend .border-dotted-line;

    .outer-circle {
      @extend .outer-circle-left;
    }
  }

  &.bridge {
    right: 0;
    text-align: right;
    top: 72%;
    width: 50%;
    @extend .border-dotted-line;

    .outer-circle {
      @extend .outer-circle-left;
    }
  }

  &.top {
    right: 0;

    top: 80%;
    width: 40%;
    text-align: right;
    @extend .border-dotted-line;

    .outer-circle {
      @extend .outer-circle-left;
    }
  }

  &.back {
    left: 0;
    top: 80%;
    width: 40%;
    text-align: left;
    @extend .border-dotted-line;

    .outer-circle {
      @extend .outer-circle-right;
    }
  }

}

@media screen and (max-width: 600px) {

  .guitar-img {
    //width: 230px;
    width: 143px;
  }
  #components-guitar {
    ul {
      li {
        width: auto;
        padding: 10px 10px 0 30px;

        &.active {
          border: 4px solid var(--main-bg-color);
          background: white !important;
          width: auto;
        }
      }

    }
  }

  .side-indo {
    width: 100% !important;
    height: 100% !important;

    img {
      position: relative !important;
      width: 100% !important;
    }
  }
}


</style>