import { Flex, Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useLogin } from "../hooks/use-login";
import { Button } from "@/components/ui/button";

export default function LoginForm(): React.ReactNode {
  const { handleSubmit, register, onSubmit, loading, errors } = useLogin();

  return (
    <Flex as={"form"} p={"20px"} gap={"10px"} flexDirection={"column"} onSubmit={handleSubmit((event) => onSubmit(event))} _dark={{ color: "black" }}>
      <Field invalid={errors?.emailORName && true} errorText={errors?.emailORName?.message}>
        <Input placeholder={"Email or Full Name"} type={"text"} bgColor={"white"} {...register("emailORName")} />
      </Field>
      <Field invalid={errors?.password && true} errorText={errors?.password?.message}>
        <Input placeholder={"Password"} type={"text"} bgColor={"white"} {...register("password")} />
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
          loadingText="loading..."
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
}
