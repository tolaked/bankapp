import React from "react";
import ModalLayout from "src/components/modal";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { CopyOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, MultiSelect } from "src/components/fields";
import { useUsersContext } from "src/contexts/UsersProvider";
import { useAuthUser } from "src/hooks";
import { formatNumber } from "src/utils";

function AccountModal({ user, setModal, modal, accountData, setAccountData }) {
  return (
    <ModalLayout
      isDrawer={true}
      showHeader
      title=""
      isOpen={modal}
      setIsOpen={setModal}
    >
      <AccountForm
        {...{
          user,
          setModal,
          modal,
          accountData,
          setAccountData,
        }}
      />
    </ModalLayout>
  );
}
export const AccountForm = ({ setModal, accountData, setAccountData }) => {
  const initialValues = {
    election: "",
    ward: "",
    lga: "",
    state: "",
    transfer_type: "",
    location: "",
    officer: "",
    country: "NG",
  };

  const { getUserByToken, user } = useUsersContext();
  const { user: authUser } = useAuthUser();
  const validationSchema = Yup.object().shape({
    transfer_type: Yup.string().required(),
    // application: Yup.string().notRequired(),
    toAccountId: Yup.string().required("Account is required"),
    amount: Yup.string().required("Amount is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("values", values);
        const { transfer_type } = values;
      }}
    >
      {({ values, errors }) => {
        console.log("active valeue", values, errors);
        return (
          <Form>
            <div className="flex justify-end pb-3 ">
              <CloseOutlined className="w-14" onClick={() => setModal(false)} />
            </div>
            <h1 className="text-2xl font-bold mb-4 ">Fund Wallet</h1>
            <p className=" text-gray-400 text-sm">Wallet balance</p>{" "}
            <h2 className=" text-primary font-bold text-3xl">
              ${formatNumber(authUser?.claim?.account[0]?.balance, "0,0.00")}
            </h2>{" "}
            <div className="w-20 border-b border-gray-400 my-4"></div>
            {/*<hr className="-mx-5" />*/}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <div className="space-x-3 ">
                  <label className="text-sm   font-medium text-gray-900">
                    <Field
                      className="w-4 h-4 text-primary border-gray-200  focus:ring-primary"
                      type="radio"
                      name="transfer_type"
                      value="account"
                    />
                    Bank Transfer
                  </label>
                  <label className="text-sm   font-medium text-gray-900">
                    <Field
                      className="w-4 h-4 text-primary border-gray-200 rounded focus:ring-primary"
                      type="radio"
                      name="transfer_type"
                      value="card"
                    />
                    Fund by Card
                  </label>
                </div>
              </div>
              {values?.transfer_type === "card" ? (
                <>
                  <div className="col-span-2">
                    <Input name="amount" label="Enter amount" />
                  </div>{" "}
                  <div className="col-span-2">
                    <MultiSelect
                      extraClasses="!w-full !md:grid-cols-1"
                      multiple={false}
                      format={() => {
                        return (
                          <div className="grid grid-cols-6  ">
                            <div className="col-span-1">
                              <div className="bg-primary ring-primary rounded-full w-5 h-5" />
                            </div>
                            <div className="col-span-3">
                              <p>**** **** **** 0654</p>
                              <p className="text-gray-400 uppercase">
                                Expire Date
                              </p>
                            </div>
                            <div className="col-span-2">
                              <h2 className="text-bold text-2xl">03/24</h2>
                              <p className="text-gray-400">Expire Date</p>
                            </div>
                          </div>
                        );
                      }}
                      optionLabel="name"
                      optionValue="code"
                      options={[{ name: "card", code: "card" }]}
                      name="card"
                    />
                  </div>
                  <div className="col-span-2">
                    <Input name="description" />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-2">
                    <div className=" divide-y border border-dashed ">
                      <div className="flex w-3/4 p-6   justify-between">
                        <div>
                          <p className="text-gray-400">Account number </p>
                          <p className="font-bold">134343</p>
                        </div>
                        <div>
                          <CopyOutlined className="text-primary" />
                        </div>
                        <div>
                          <p className="text-gray-400">Sort code</p>
                          <p className="font-bold">134343</p>
                        </div>
                      </div>
                      <div className="flex p-6">
                        <div>
                          <p className="text-gray-300">Beneficiary Name </p>
                          <p className="font-bold">John Doe</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center text-xs text-gray-400">
                    To fund wallet via a bank transfer, pleaase copy the account
                    number above and send your funds to it
                  </div>
                </>
              )}
              <div className="col-span-2 -mx-5">
                <hr />
              </div>
              <div className="col-span-2 flex justify-between  mt-4">
                <Button
                  className="text-sm  text-white p-2 px-3 bg-primary w-full rounded-full ring-primary ring-offset-primary"
                  type="submit"
                >
                  Done
                </Button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export const useAccountModal = ({
  setModal,
  modal,
  accountData,
  setAccountData,
}) => {
  return <AccountModal {...{ setModal, modal, accountData, setAccountData }} />;
};
export default AccountModal;
