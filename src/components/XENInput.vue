<template>
  <div class="xen-input-wrapper">
    <input
      :class="inputClass"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :autofocus="autofocus"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
    <span v-if="prefix" class="xen-input__prefix">{{ prefix }}</span>
    <span v-if="suffix" class="xen-input__suffix">{{ suffix }}</span>
    <span v-if="showClear && modelValue && !disabled" class="xen-input__clear" @click="handleClear">×</span>
  </div>
</template>

<script>
export default {
  name: 'XENInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => ['text', 'password', 'number', 'email', 'tel'].includes(value)
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: null
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    showClear: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  },
  computed: {
    inputClass() {
      return [
        'xen-input',
        `xen-input--${this.size}`,
        {
          'xen-input--disabled': this.disabled,
          'xen-input--focus': this.isFocused,
          'xen-input--has-prefix': this.prefix,
          'xen-input--has-suffix': this.suffix || (this.showClear && this.modelValue)
        }
      ];
    }
  },
  data() {
    return {
      isFocused: false
    };
  },
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
      this.$emit('input', event.target.value);
    },
    handleFocus(event) {
      this.isFocused = true;
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.isFocused = false;
      this.$emit('blur', event);
    },
    handleChange(event) {
      this.$emit('change', event.target.value);
    },
    handleClear() {
      this.$emit('update:modelValue', '');
      this.$emit('clear');
    }
  }
};
</script>

<style scoped>
.xen-input-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.xen-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.3s ease;
  outline: none;
  background: #fff;
  box-sizing: border-box;
}

.xen-input--small {
  padding: 4px 12px;
  font-size: 12px;
}

.xen-input--medium {
  padding: 8px 12px;
  font-size: 14px;
}

.xen-input--large {
  padding: 12px 16px;
  font-size: 16px;
}

.xen-input:focus {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.xen-input--disabled {
  background: #f5f5f5;
  color: #ccc;
  cursor: not-allowed;
}

.xen-input--has-prefix {
  padding-left: 32px;
}

.xen-input--has-suffix {
  padding-right: 32px;
}

.xen-input__prefix,
.xen-input__suffix {
  position: absolute;
  font-size: 14px;
  color: #999;
  pointer-events: none;
}

.xen-input__prefix {
  left: 10px;
}

.xen-input__suffix {
  right: 10px;
}

.xen-input__clear {
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  line-height: 18px;
  text-align: center;
  font-size: 16px;
  color: #999;
  cursor: pointer;
  border-radius: 50%;
  background: #f5f5f5;
  transition: all 0.3s ease;
}

.xen-input__clear:hover {
  background: #d9d9d9;
  color: #666;
}
</style>
