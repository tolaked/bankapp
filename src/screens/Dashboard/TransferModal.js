import React from "react";
import ModalLayout from "src/components/modal";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Input } from "src/components/fields";
import { CloseOutlined } from "@ant-design/icons";

function TransferModal({
  user,
  setModal,
  modal,
  transferData,
  setTransferData,
}) {
  return (
    <ModalLayout
      isDrawer={true}
      showHeader
      title=""
      isOpen={modal}
      setIsOpen={setModal}
    >
      <TransferForm
        {...{
          user,
          setModal,
          modal,
          transferData,
          setTransferData,
        }}
      />
    </ModalLayout>
  );
}
export const TransferForm = ({
  setModal,
  modal,
  transferData,
  setTransferData,
}) => {
  const initialValues = {
    election: "",
    ward: "",
    lga: "",
    state: "",
    constituencyType: "",
    location: "",
    officer: "",
    country: "NG",
  };

  const validationSchema = Yup.object().shape({
    officer: Yup.string().notRequired(),
    // application: Yup.string().notRequired(),
    election: Yup.string().required("This field is required"),
    lga: Yup.string().required("This field is required"),
    state: Yup.string().required("This field is required"),
    country: Yup.string().required("This field is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("values", values);
        const { ward, location, ...others } = values;
      }}
    >
      {({ values, errors }) => {
        console.log("active valeue", values, errors);
        return (
          <Form>
            <div className="flex justify-end pb-3 ">
              <CloseOutlined className="w-14" onClick={() => setModal(false)} />
            </div>
            <h1 className="text-lg ">Transfer Funds to Account</h1>{" "}
            <h4>Wallet Balance</h4>
            <h1 className="font-bold text-2xl">$300,000</h1>
            <hr className="-mx-5" />
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <Input name="sortCode" label="Sort Code" />
              </div>{" "}
              <div className="col-span-2">
                <Input name="accountNumber" label="Account Number" />
                <p className="text-primary">Ezekiel Dunga</p>
              </div>
              <div className="col-span-2">
                <Input name="amount" type="number" label="Amount" />
              </div>{" "}
              <div className="col-span-2">
                <Input name="description" type="text" label="Description" />
              </div>
              {/*<div className="col-span-2">*/}
              {/*  <ComboSelect*/}
              {/*    options={[]}*/}
              {/*    placeholder="Select"*/}
              {/*    name="ward"*/}
              {/*    label="Ward"*/}
              {/*  />*/}
              {/*</div>*/}
              {/*<div className="col-span-2">*/}
              {/*  <ComboSelect*/}
              {/*    options={userApplication || []}*/}
              {/*    optionLabel="position"*/}
              {/*    optionValue="id"*/}
              {/*    placeholder="Select"*/}
              {/*    name="application"*/}
              {/*    label="Select Applicant"*/}
              {/*  />*/}
              {/*</div>*/}
              <div className="col-span-2 flex justify-between  mt-4">
                <div className="flex">
                  <Button
                    className="text-sm text-white p-2 px-3 bg-primary w-full rounded"
                    type="submit"
                  >
                    Send Money
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export const useTransferModal = ({
  setModal,
  modal,
  transferData,
  setTransferData,
}) => {
  return (
    <TransferModal {...{ setModal, modal, transferData, setTransferData }} />
  );
};
export default TransferModal;
