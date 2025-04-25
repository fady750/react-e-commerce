import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { useSearchParams } from 'react-router';

export default function Filter({options=[], filterName=""}) {
    const [searchParams, setSearchParams] = useSearchParams();    
    let field = searchParams.get(filterName);
    let ele = null
    if(field){
        ele= options.find((ele) => ele.value === field )
    }
    const [selected, setSelected] = useState(ele || options[0]);
    function handleClick(value){
        if(value !== selected.value){
            searchParams.set(filterName, value);
            setSearchParams(searchParams);
            let ele = options.find((ele)=>ele.value === value)
            setSelected(ele);
        }
    }
    
    return (

        <div className=" pt-20 flex items-center space-x-3 ">
            <Field className="flex items-center gap-3" >
                <Label>{filterName}</Label>
                <Listbox value={selected.value} onChange={handleClick} >
                    <ListboxButton
                        className={clsx(
                            'relative block w-full rounded-lg bg-transparent py-1.5 pr-8 pl-3 text-left text-sm/6 text-black border border-gray-600',
                            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                        )}
                    >
                        {selected.label}
                        <ChevronDownIcon
                            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 "
                            aria-hidden="true"
                        />
                    </ListboxButton>
                    <ListboxOptions
                        anchor="bottom start"
                        transition
                        className={clsx(
                            'w-(--button-width) rounded-xl border border-gray-600 bg-transparent text-black p-1 [--anchor-gap:--spacing(1)] focus:outline-none',
                            'transition duration-100 ease-in data-leave:data-closed:opacity-0'
                    )}
                    >
                        {options.map((person) => (
                            <ListboxOption
                            key={person.value}
                            value={person.value}
                            className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10 text-black"
                            >
                                <div className='text-sm/6 text-black flex items-center' >
                                    {person.value === selected.value && <CheckIcon className=" size-4 fill-black group-data-selected:visible"/>}
                                    <span className=" ml-2">{person.label}</span>
                                </div>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>
            </Field>
        </div>
)
}