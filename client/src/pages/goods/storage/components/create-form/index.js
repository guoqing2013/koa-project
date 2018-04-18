import React from 'react';
// import { Design, Button, Notify, BlockHeader } from 'zent';
import * as api from 'api/goods';
import { Form, Radio, Checkbox, Button, Notify } from 'zent';
const { Field, FormInputField, FormSelectField, FormRadioGroupField, FormCheckboxField, FormCheckboxGroupField, FormColorPickerField, FormDateRangePickerField, FormNumberInputField, FormSwitchField, createForm, SubmissionError } = Form;

class FieldForm extends React.Component {
  state = {
    checkedList: []
  }

  onCheckboxChange = (checkedList) => {
    this.setState({ checkedList });
  }

  submit = (values, zentForm) => {
    console.log(values)
    // values = {
    //   retail_source: 'WEB-RETAIL-AJAX',
    //   sku_no: 'tiaoxinma',
    //   name: 'name33',
    //   specifications: 'guige',
    //   category_id: 305936,
    //   photo_url: [{"url":"https://img.yzcdn.cn/public_files/2017/08/30/63a8d28bce4ca2e5d081e1e69926288e.jpg"}],
    //   unit: '件',
    //   vendor: {},
    //   cost_price: '0',
    //   stock_num: 3000,
    //   source: 'WEB_BACK_END',
    //   idempotent_no: 1523933651255
    // };
    api
      .createSku(values)
      .then(data => {
        // this.setState({
        //   value: data
        // });
      })
      // .catch(err => Notify.error(getRequestError(err)));

    // Notify.success(JSON.stringify(values));
    const promise = new Promise((resolve) => setTimeout(resolve, 1000));

    return promise.then(() => {
      const random = Math.random() * 10;
      if (random > 4) {
        zentForm.setFieldExternalErrors({
          user: '用户名已被占用'
        });
        // 可以使用throw SubmissionError 在 onSubmitFail 中处理，也可以在这里直接 alert 错误信息
        throw new SubmissionError('用户名已被占用');
      } else {
        // 可以将返回值传入到 onSubmitSuccess ，也可以直接在这里处理掉
        return '注册成功';
      }
    });
  };

  resetForm = () => {
    this.props.zentForm.resetFieldsValue();
  }

  render() {
    const { handleSubmit, zentForm } = this.props;
    const isSubmitting = zentForm.isSubmitting();
    return (
      <Form horizontal onSubmit={handleSubmit(this.submit)} >
        <FormInputField
          name="sku_no"
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
          name="unit"
          label="库存单位："
          data = {[
            { value: 1, text: '件' },
            { value: 2, text: '双' }
          ]}
          validationErrors={{ required: '请选择类型' }}
        />
         <FormSelectField
          name="vendor"
          label="供应商："
          data = {[
            { value: 1, text: '1' },
            { value: 2, text: '2' }
          ]}
          validationErrors={{ required: '请选择类型' }}
        />
         <FormInputField
          name="cost_price"
          type="text"
          label="成本价："
          helpDesc="成本价由系统自动计算，如需调整可在成本调价进行修改"
          spellCheck={false}
        />
         <FormInputField
          name="stock_num"
          type="text"
          addonBefore="￥"
          label="商品库存："
          helpDesc="创建时可设置初始库存，创建后可在商品入库管理库存"
          spellCheck={false}
        />
        
        <div className="zent-form__form-actions">
          <Button type="primary" htmlType="submit" loading={isSubmitting}>保存</Button>
          <Button type="primary" outline onClick={this.resetForm}>重置表单值</Button>
        </div>
      </Form>
    );
  }
};
const createGoodsForm = createForm({scrollToError: true})(FieldForm);
export default createGoodsForm;