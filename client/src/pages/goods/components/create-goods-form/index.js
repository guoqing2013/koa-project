import React from 'react';
// import { Design, Button, Notify, BlockHeader } from 'zent';
import { Form, Radio, Checkbox, Button, Notify } from 'zent';
const { Field, FormInputField, FormSelectField, FormRadioGroupField, FormCheckboxField, FormCheckboxGroupField, FormColorPickerField, FormDateRangePickerField, FormNumberInputField, FormSwitchField, createForm } = Form;

class FieldForm extends React.Component {
  state = {
    checkedList: []
  }

  onCheckboxChange = (checkedList) => {
    this.setState({ checkedList });
  }

  submit = (values, zentForm) => {
    Notify.success(JSON.stringify(values));
  };

  resetForm = () => {
    this.props.zentForm.resetFieldsValue();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form horizontal onSubmit={handleSubmit(this.submit)} >
        <FormInputField
          name="skuNo"
          type="text"
          label="商品条码："
          placeholder="如无条码系统将自动生成"
          helpDesc="输入标准商品条码，系统会自动匹配商品信息并填充"
          spellCheck={false}
          validations={{
            maxLength: 20
          }}
          validationErrors={{
            maxLength: '商品编码不能超过20个字长度'
          }}
        />
        <FormInputField
          name="name"
          type="text"
          label="商品名称："
          placeholder="例如：鲜榨果汁 500ml"
          required
          spellCheck={false}
          validations={{ required: true }}
          validationErrors={{ required: '商品名称不能为空' }}
        />
        <FormInputField
          name="specifications"
          type="text"
          label="规格:"
          spellCheck={false}
          validations={{
            maxLength: 20
          }}
          validationErrors={{
            maxLength: '规格不能超过20个字长度'
          }}
        />
        <FormSelectField
          name="kucundanwei"
          label="库存单位："
          data = {[
            { value: 1, text: '件' },
            { value: 2, text: '双' }
          ]}
          validationErrors={{ required: '请选择类型' }}
        />
         <FormSelectField
          name="type"
          label="供应商："
          data = {[
            { value: 1, text: '1' },
            { value: 2, text: '2' }
          ]}
          validationErrors={{ required: '请选择类型' }}
        />
         <FormInputField
          name="lastCostPrice"
          type="text"
          label="成本价："
          helpDesc="成本价由系统自动计算，如需调整可在成本调价进行修改"
          spellCheck={false}
        />
         <FormInputField
          name="stockNum"
          type="text"
          addonBefore="￥"
          label="商品库存："
          helpDesc="创建时可设置初始库存，创建后可在商品入库管理库存"
          spellCheck={false}
        />
        
        <div className="zent-form__form-actions">
          <Button type="primary" htmlType="submit">获取表单值</Button>
          <Button type="primary" outline onClick={this.resetForm}>重置表单值</Button>
        </div>
      </Form>
    );
  }
};
const createGoodsForm = createForm({scrollToError: true})(FieldForm);
export default createGoodsForm;