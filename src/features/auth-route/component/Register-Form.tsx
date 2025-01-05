import { Flex, Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { ListGendder } from "@/utils/dummy";
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from "@/components/ui/select";
import { createListCollection } from "@chakra-ui/react";
import useRegister from "../hooks/use-register";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const test = createListCollection({
  items: ListGendder,
});

export default function RegisterForm(): React.ReactNode {
  const { register, handleSubmit, onSubmit, loading, errors } = useRegister();

  return (
    <Flex as={"form"} p={"20px"} gap={"10px"} flexDirection={"column"} onSubmit={handleSubmit((event) => onSubmit(event))} _dark={{ color: "black" }}>
      <Field invalid={errors.name && true} errorText={errors.name?.message}>
        <Input placeholder={"Enter Full Name"} type={"text"} bgColor={"white"} {...register("name")} />
      </Field>
      <Field invalid={errors.email && true} errorText={errors.email?.message}>
        <Input placeholder={"Enter Valid Email"} type={"text"} bgColor={"white"} {...register("email")} />
      </Field>
      <Field invalid={errors.password && true} errorText={errors.password?.message}>
        <Input placeholder={"Password"} type={"text"} bgColor={"white"} {...register("password")} />
      </Field>
      <Field invalid={errors.gender && true} errorText={errors.gender?.message}>
        <SelectRoot collection={test} {...register("gender")}>
          <SelectTrigger bgColor={"white"} _dark={{ bg: "white" }}>
            <SelectValueText placeholder="Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem item={"man"}>
              <Flex gap={"5px"} alignItems={"center"}>
                Man
                <BsGenderMale color="blue" />
              </Flex>
            </SelectItem>
            <SelectItem item={"woman"}>
              <Flex gap={"5px"} alignItems={"center"}>
                Woman
                <BsGenderFemale color="pink" />
              </Flex>
            </SelectItem>
          </SelectContent>
        </SelectRoot>
      </Field>
      <Flex>
        <Button
          type="submit"
          w={"full"}
          bg={"grey"}
          border={"1px solid"}
          rounded={"5px"}
          textTransform={"capitalize"}
          fontWeight={"bold"}
          loading={loading}
          loadingText="Loading..."
        >
          Register
        </Button>
      </Flex>
    </Flex>
  );
}
