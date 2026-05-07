<template>
  <button :class="buttonClass" :disabled="disabled" @click="handleClick">
    <span v-if="loading" class="loading-icon">⏳</span>
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (value) =>
        ["default", "primary", "success", "warning", "danger"].includes(value),
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    text: {
      type: String,
      default: "按钮",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return [
        "my-button",
        `my-button--${this.type}`,
        `my-button--${this.size}`,
        {
          "my-button--disabled": this.disabled || this.loading,
          "my-button--loading": this.loading,
        },
      ];
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled && !this.loading) {
        this.$emit("click");
      }
    },
  },
};
</script>

<style scoped>
.my-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.my-button--default {
  background: #fff;
  color: #333;
  border: 1px solid #d9d9d9;
}

.my-button--default:hover:not(:disabled) {
  border-color: #1890ff;
  color: #1890ff;
}

.my-button--primary {
  background: #1890ff;
  color: #fff;
}

.my-button--primary:hover:not(:disabled) {
  background: #40a9ff;
}

.my-button--success {
  background: #52c41a;
  color: #fff;
}

.my-button--success:hover:not(:disabled) {
  background: #73d13d;
}

.my-button--warning {
  background: #faad14;
  color: #fff;
}

.my-button--warning:hover:not(:disabled) {
  background: #ffc53d;
}

.my-button--danger {
  background: #f5222d;
  color: #fff;
}

.my-button--danger:hover:not(:disabled) {
  background: #ff4d4f;
}

.my-button--small {
  padding: 4px 12px;
  font-size: 12px;
}

.my-button--medium {
  padding: 8px 16px;
  font-size: 14px;
}

.my-button--large {
  padding: 12px 24px;
  font-size: 16px;
}

.my-button--disabled,
.my-button--loading {
  cursor: not-allowed;
  opacity: 0.6;
}

.loading-icon {
  margin-right: 6px;
}
</style>
