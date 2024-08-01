import { Button, Form, Input, Modal, Radio } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useCallback, useEffect } from 'react'

import { checkProjectName } from '@/api/apiResult/systemGlobal/global'
import { permsMenu2 } from '@/store/globalStore/globalStore'
import { LoginPersistStore } from '@/store/loginStore/loginStore'
import { projectConfigStore, projectStore } from '@/store/projectStore/projectStore'
import { useStyle } from '@/styleSheet/modal/modal'
// import NormalRules from '@/utils/rules/normalRules'

const ProjectModal: React.FC = () => {
  const [form] = Form.useForm()

  const { styles } = useStyle()
  const { setModalStatus, projectModalStatus } = projectConfigStore()
  const { setProjectDetailInfo, updateProjectFn, createProjectFn, projectDetailInfo } =
    projectStore()
  const { secondPermsMenu } = LoginPersistStore.getState()
  const createTask = useCallback(() => {
    form
      .validateFields()
      .then(async res => {
        if (projectDetailInfo) {
          await updateProjectFn({ id: projectDetailInfo.id, ...res })
        } else {
          await createProjectFn(res)
        }
        setModalStatus()
      })
      .catch(info => {
        console.log('Validate Failed:', info)
      })
  }, [form, projectDetailInfo])

  useEffect(() => {
    if (projectModalStatus && projectDetailInfo) {
      const { projectName, description, projectType } = projectDetailInfo

      const fromData = { projectName, description, projectType }
      form.setFieldsValue(fromData)
    }
    return () => {
      if (!projectModalStatus) {
        form.resetFields()
      }
      setProjectDetailInfo(null)
    }
  }, [projectModalStatus, projectDetailInfo, form])

  return (
    <Modal
      title={projectDetailInfo ? '修改项目' : '新建项目'}
      className={styles.createTaskModal}
      footer={
        <>
          <Button className='text-[#333333] rounded-sm' onClick={setModalStatus}>
            取消
          </Button>
          <Button
            className='w-[72px] h-[32px]  text-[#ffffff]   bg-primary-600  rounded-sm  '
            type='primary'
            onClick={createTask}
          >
            确定
          </Button>
        </>
      }
      open={projectModalStatus}
      onCancel={setModalStatus}
    >
      <Form
        form={form}
        layout='horizontal'
        name='userForm'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ projectType: 0 }}
      >
        <Form.Item
          name='projectName'
          validateFirst
          validateTrigger={['onBlur']}
          label='项目名称'
          rules={[
            { required: true, message: '请输入项目名称' },
            { type: 'string', min: 1, max: 20, message: '项目名称长度为1到20个字符' },
            {
              validateTrigger: 'onBlur',
              async validator(_, value) {
                const reg = /^[\w\u4E00-\u9FA5]+$/
                if (reg.test(value)) {
                  const res = await checkProjectName({ projectName: value })
                  if (!res.data) {
                    return Promise.reject(new Error('项目名称重复'))
                  }
                  return Promise.resolve()
                }
                return Promise.reject(new Error('项目名称由汉字、数字、字母和下划线组成'))
              }
            }
          ]}
        >
          <Input className='rounded-sm' />
        </Form.Item>

        <Form.Item
          name='projectType'
          label='测试标靶'
          rules={[{ required: true, message: '请选择测试标靶' }]}
        >
          <Radio.Group disabled={projectDetailInfo ? true : false}>
            {secondPermsMenu.map(item => {
              return (
                <Radio value={permsMenu2[item.id as keyof typeof permsMenu2]} key={item.id}>
                  {' '}
                  {item.permissionName}
                </Radio>
              )
            })}
          </Radio.Group>
        </Form.Item>

        <Form.Item name='description' label='项目描述'>
          <TextArea className='rounded-sm' autoSize={{ minRows: 4, maxRows: 5 }} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ProjectModal
