<template>
  <div class="container passports-list">
    <div class="row">
      <div class="col-md-12">
        <div class="mt-3">
          <ul class="list list-inline">
            <li
              v-for="item in items"
              :key="item.id"
              class="d-flex justify-content-between"
            >
              <div class="d-flex flex-row align-items-center">
                <div class="ml-2">
                  <h6 class="mb-0">{{ item.attributes.customAttributes.title }}</h6>
                  <div class="d-flex flex-row mt-1 text-black-50 date-time">
                    <div>
                      <span class="ml-2 text-secondary">
                        {{ item.attributes.updatedAt }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center">
                <div class="d-flex align-items-center mr-2">
                  <button type="button" class="btn btn-sm btn-outline-primary mr-2">Edit</button>
                  <button type="button" class="btn btn-sm btn-outline-danger">Remove</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = [{
  attributes: {
    customAttributes: {
      title: 'Test'
    },
    updatedAt: new Date().getUTCDate()
  },
  id: (Math.random() * new Date().getTime()).toString()
}, {
  attributes: {
    customAttributes: {
      title: 'Test'
    },
    updatedAt: new Date().getUTCDate()
  },
  id: (Math.random() * new Date().getTime()).toString()
}, {
  attributes: {
    customAttributes: {
      title: 'Test'
    },
    updatedAt: new Date().getUTCDate()
  },
  id: (Math.random() * new Date().getTime()).toString()
}, {
  attributes: {
    customAttributes: {
      title: 'Test'
    },
    updatedAt: new Date().getUTCDate()
  },
  id: (Math.random() * new Date().getTime()).toString()
}, {
  attributes: {
    customAttributes: {
      title: 'Test'
    },
    updatedAt: new Date().getUTCDate()
  },
  id: (Math.random() * new Date().getTime()).toString()
}]
</script>

<style lang="scss">
.passports-list {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

  .icons i {
    color: #b5b3b3;
    border: 1px solid #b5b3b3;
    padding: 6px;
    margin-left: 4px;
    border-radius: 5px;
    cursor: pointer;
  }

  .activity-done {
    font-weight: 600;
  }

  .list-group li {
    margin-bottom: 12px;
  }

  .list-group-item {
  }

  .list li {
    list-style: none;
    padding: 10px;
    border: 1px solid #e3dada;
    margin-top: 12px;
    border-radius: 5px;
    background: #fff;
  }

  .checkicon {
    color: green;
    font-size: 19px;
  }

  .date-time {
    font-size: 12px;
  }

  .profile-image img {
    margin-left: 3px;
  }
}
</style>