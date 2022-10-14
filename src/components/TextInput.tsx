import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputRootProps {
	children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
	return (
		<div className="px-3 flex items-center gap-3 bg-gray-800 rounded  w-full h-12 focus-within:ring-1 ring-cyan-300 transition-all">
			{props.children}
		</div>
	);
}
TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
	children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
	return(
		<Slot className="w-6 h-6 text-gray-400">
			{props.children}
		</Slot>
	);
}
TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {
	return (
		<input
			className="py-4 bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
			{...props}
		/>
	);
}
TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
	Root: TextInputRoot,
	Input: TextInputInput,
	Icon: TextInputIcon,
}