"use client"
import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

interface FileInputProps {
    label: string;
  }

const AddItem = () => {
    
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        setSelectedFile(event.target.files[0]);
      }
    };
  
    const handleCancelClick = () => {
      setSelectedFile(null);
      // Clear the input value
      (document.getElementById('file-input') as HTMLInputElement).value = '';
    };

    return (
        <div className='p-20'>
            <Card className='h-[150vh] w-[83vw]'>
                <div className='box-border border-b-2 h-[10vh] pt-5 pl-5'>
                    Add Product
                </div>
                <CardContent>
                    <form>
                        <div className="grid pt-8 w-full items-center gap-4">
                            <div className="flex flex-col space-y-3">
                                <Label htmlFor="Product">Product Type</Label>
                                <Select>
                                    <SelectTrigger id="Product">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Next.js</SelectItem>
                                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                        <SelectItem value="astro">Astro</SelectItem>
                                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className='flex flex-row pt-3'>
                                <div className="flex flex-col space-y-3 w-[40vw]">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Name of your project" />
                                </div>
                                <div className="flex flex-col space-y-3 pl-5 w-[40vw]">
                                    <Label htmlFor="Code">Code</Label>
                                    <Input id="Code" placeholder="Name of your project" />
                                </div>
                            </div>

                            <div className='flex flex-row pt-3'>
                                <div className="flex flex-col space-y-3 w-[40vw]">
                                    <Label htmlFor="Barcode">Barcode Symbology</Label>
                                    <Select>
                                        <SelectTrigger id="Barcode">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="next">Next.js</SelectItem>
                                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                            <SelectItem value="astro">Astro</SelectItem>
                                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col space-y-3 pl-5 w-[40vw]">
                                    <Label htmlFor="Category">Category</Label>
                                    <Select>
                                        <SelectTrigger id="Category">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="next">Next.js</SelectItem>
                                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                            <SelectItem value="astro">Astro</SelectItem>
                                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className='flex flex-row pt-3'>
                                <div className="flex flex-col space-y-3 w-[40vw]">
                                    <Label htmlFor="Cost">Cost</Label>
                                    <Input id="Cost" placeholder="Name of your Cost" />
                                </div>
                                <div className="flex flex-col space-y-3 pl-5 w-[40vw]">
                                    <Label htmlFor="Price">Price</Label>
                                    <Input id="Price" placeholder="Name of your Price" />
                                </div>
                            </div>

                            <div className="flex flex-col pt-3 space-y-3">
                                <Label htmlFor="Tax Method">Tax Method </Label>
                                <Select>
                                    <SelectTrigger id="Tax Method">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Next.js</SelectItem>
                                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                        <SelectItem value="astro">Astro</SelectItem>
                                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col pt-3 space-y-3">
                                <Label htmlFor="Quantity">Quantity</Label>
                                <Input id="Quantity" placeholder="Name of your Quantity" />
                            </div>

                            <div className="flex flex-col pt-3 space-y-3">
                            <Label htmlFor="Image" className="text-gray-700">Image</Label>
      {/* <label htmlFor="file-input" className="text-gray-700" /> */}
      <div className="relative">
        <input
          accept="image/*"
          id="file-input"
          placeholder="File"
          type="file"
          onChange={handleFileChange}
          className="border border-gray-300 p-2 w-full"
        />
        {selectedFile && (
          <button
            type="button"
            onClick={handleCancelClick}
            className="absolute top-0 right-0 mt-2 mr-2 text-red-500"
            title="Remove file"
          >
            &times;
          </button>
        )}
      </div>
      {selectedFile && (
        <div className="mt-2 text-sm text-gray-600">
          Selected file: {selectedFile.name}
        </div>
      )}
    </div>

                            <div className="flex flex-col pt-3 space-y-3">
                                <Label htmlFor="Description">Description / Product Details</Label>
                                <Textarea className='h-[20vh]' placeholder="Type your Description / Product Details." />
                            </div>
                        </div>
                    </form>

                    <div className='pt-5 flex flex-row'>
                        <Button className='bg-[#7ad4f1]'>Add Prodect</Button>
                        <div className='pl-5'>
                            <Button className='bg-[#e08bd4]'>Reset</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddItem