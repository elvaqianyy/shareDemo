import { createTest, createVue, destroyVM } from '../utils';
import Alert from '../lib/Alert/main.js';

describe('Alert', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  test('create', () => {
    vm = createTest(Alert, {
      title: 'test',
      showIcon: true
    }, true);
    expect(vm.$el.querySelector('.el-alert__title').textContent).toEqual('test');
    // expect(vm.$el.classList.contains('el-alert--info')).toBeTruthy();
  });

  // test('type', () => {
  //   vm = createTest(Alert, {
  //     title: 'test',
  //     type: 'success',
  //     showIcon: true
  //   }, true);
  //   expect(vm.$el.classList.contains('el-alert--success')).to.true;
  // });

  // it('description', () => {
  //   vm = createTest(Alert, {
  //     title: 'Dorne',
  //     description: 'Unbowed, Unbent, Unbroken',
  //     showIcon: true
  //   }, true);
  //   expect(vm.$el.querySelector('.el-alert__description').textContent)
  //     .to.equal('Unbowed, Unbent, Unbroken');
  // });

  // it('theme', () => {
  //   vm = createTest(Alert, {
  //     title: 'test',
  //     effect: 'dark'
  //   }, true);
  //   expect(vm.$el.classList.contains('is-dark')).to.true;
  // });

  // it('title slot', () => {
  //   vm = createVue(`
  //     <el-alert>
  //       <span slot="title">foo</span>
  //     </el-alert>
  //   `);

  //   expect(vm.$el.querySelector('.el-alert__title').textContent).to.equal('foo');
  // });

  // it('close', () => {
  //   vm = createVue({
  //     template: `
  //       <div>
  //         <el-alert
  //           title="test"
  //           close-text="close"></el-alert>
  //       </div>
  //     `
  //   }, true);
  //   vm.$el.querySelector('.el-alert__closebtn').click();
  //   expect(vm.$children[0].visible).to.false;
  // });
});