import './styles/global.css';
import { Envelope, Lock } from 'phosphor-react';

import { Logo } from './Logo';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';


export function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-900 text-gray-100">
      <header className="flex flex-col items-center">
        <Logo className="animate-spin-slow" />

        <Heading className="mt-6" size="lg">
          Ignite Lab
        </Heading>

        <Text className="text-gray-400" size="lg">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-[400px] gap-7 mt-10">
        <label className="flex flex-col gap-3" htmlFor="email">
          <Text className="font-semibold">E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input id="email" type="email" placeholder="johndoe@example.com" />
          </TextInput.Root>
        </label>

        <label className="flex flex-col gap-3" htmlFor="password">
          <Text className="font-semibold">Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input id="password" type="password" placeholder="************" />
          </TextInput.Root>
        </label>

        <label className="flex items-center gap-2" htmlFor="remember">
          <Checkbox id="remember" />
          <Text className="text-gray-200" size="sm">Lembrar de mim por 30 dias</Text>
        </label>

        <Button className="mt-4" type="submit">Entrar</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}