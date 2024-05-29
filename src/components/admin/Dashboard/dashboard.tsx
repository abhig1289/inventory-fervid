import React from 'react'
import { Card } from '../../ui/card'
import { Progress } from '../../ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import TinyLineCharts from '@/components/Charts/TinyLineCharts'
import BarComponent from '@/components/Charts/BarChart'

const Dashboard = () => {
    return (
        <div className='h-[250vh]'>
            <div className='flex flex-row pt-10 pl-8 space-x-7'>
                <span className='w-[29vw]'>
                    <p className='text-gray-600 text-2xl'> Hi Graham, Good Morning</p>
                    <p className='pt-5'>Your dashboard gives you views of key performance or business process.</p>
                </span>
                <Card className='w-[15vw] h-[20vh]'>
                    <div className='flex space-x-4 pt-7'>
                        <div className='pl-5'>
                            <div className='h-[10vh] w-[5vw] bg-blue-200'>
                                <img
                                    src='https://github.com/shadcn.png' height={70} width={70}
                                    alt='image'
                                    className='pl-2 pt-1'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p>Total Sales</p>
                            <p className='text-2xl pt-2'>31.50</p>
                        </div>
                    </div>
                    <div className='pt-4 pl-5'>
                        <Progress className='h-2 w-[12vw]' value={83} />
                    </div>
                </Card>

                <Card className='w-[15vw] h-[20vh]'>
                    <div className='flex space-x-4 pt-7'>
                        <div className='pl-5'>
                            <div className='h-[10vh] w-[5vw] bg-pink-300'>
                                <img
                                    src='https://github.com/shadcn.png' height={70} width={70}
                                    alt='image'
                                    className='pl-2 pt-1'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p>Total Cost</p>
                            <p className='text-2xl pt-2'>$ 4598</p>
                        </div>
                    </div>
                    <div className='pt-4 pl-5'>
                        <Progress className='h-2 w-[12vw]' value={73} />
                    </div>
                </Card>

                <Card className='w-[15vw] h-[20vh]'>
                    <div className='flex space-x-4 pt-7'>
                        <div className='pl-5'>
                            <div className='h-[10vh] w-[5vw] bg-green-200'>
                                <img
                                    src='https://github.com/shadcn.png' height={70} width={70}
                                    alt='image'
                                    className='pl-2 pt-1'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p>Product Sold</p>
                            <p className='text-2xl pt-2'>4589 M</p>
                        </div>
                    </div>
                    <div className='pt-4 pl-5'>
                        <Progress className='h-2 w-[12vw]' value={75} />
                    </div>
                </Card>
            </div>

            <div className='flex flex-row pt-10 pl-8 space-x-7'>
                <Card className='w-[39vw] h-[70vh]'>
                    <div className='box-border flex border-b-2 h-[10vh] pt-5 pl-5'>
                        Overview
                        <div className='pl-[24vw]'>
                            <Select>
                                <SelectTrigger id="Product">
                                    <SelectValue placeholder="This Month" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Year</SelectItem>
                                    <SelectItem value="sveltekit">Month</SelectItem>
                                    <SelectItem value="astro">Week</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </Card>

                <Card className='w-[39vw] h-[70vh]'>
                    <div className='w-[39vw] box-border flex border-b-2 h-[10vh] pt-5 pl-5'>
                        Revenue Vs Cost
                        <div className='pl-[20vw]'>
                            <Select>
                                <SelectTrigger id="Product">
                                    <SelectValue placeholder="This Month" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Year</SelectItem>
                                    <SelectItem value="sveltekit">Month</SelectItem>
                                    <SelectItem value="astro">Week</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <BarComponent />
                </Card>
            </div>

            <div className='flex flex-row pt-10 pl-8 space-x-7'>
                <Card className='w-[54vw] h-[65vh]'>
                    <div className='box-border flex border-b-2 h-[10vh] pt-5 pl-5'>
                        Top Products
                        <div className='pl-[36vw]'>
                            <Select>
                                <SelectTrigger id="Product">
                                    <SelectValue placeholder="This Month" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Year</SelectItem>
                                    <SelectItem value="sveltekit">Month</SelectItem>
                                    <SelectItem value="astro">Week</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='flex flex-row pt-7 space-x-8'>
                        <div className='pl-7'>
                            <Card className='w-[15vw] h-[47vh]'>
                                <div className='flex space-x-4 pt-7'>
                                    <div className='flex flex-col pl-5 space-y-3'>
                                        <div className='h-[25vh] w-[12vw] bg-green-200'>
                                            <img
                                                src='https://github.com/shadcn.png' height={120} width={170}
                                                alt='image'
                                                className='pl-3 pt-2'
                                            />
                                        </div>
                                        <p className='text-2xl'>Product Sold</p>
                                        <p>458 items</p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <Card className='w-[15vw] h-[47vh]'>
                            <div className='flex space-x-4 pt-7'>
                                <div className='flex flex-col pl-5 space-y-3'>
                                    <div className='h-[25vh] w-[12vw] bg-green-200'>
                                        <img
                                            src='https://github.com/shadcn.png' height={120} width={170}
                                            alt='image'
                                            className='pl-3 pt-2'
                                        />
                                    </div>
                                    <p className='text-2xl'>Product Sold</p>
                                    <p>458 items</p>
                                </div>
                            </div>
                        </Card>

                        <Card className='w-[15vw] h-[47vh]'>
                            <div className='flex space-x-4 pt-7'>
                                <div className='flex flex-col pl-5 space-y-3'>
                                    <div className='h-[25vh] w-[12vw] bg-green-200'>
                                        <img
                                            src='https://github.com/shadcn.png' height={120} width={170}
                                            alt='image'
                                            className='pl-3 pt-2'
                                        />
                                    </div>
                                    <p className='text-2xl'>Product Sold</p>
                                    <p>458 items</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Card>

                <div>
                    <p className='text-2xl'>
                        Best Item All Time
                    </p>
                    <div className='pt-10'>
                        <Card className='w-[24vw] h-[25vh]'>
                            <div className='flex space-x-4 pt-7'>
                                <div className='pl-5'>
                                    <div className='h-[17vh] w-[8vw] bg-pink-300'>
                                        <img
                                            src='https://github.com/shadcn.png' height={100} width={100}
                                            alt='image'
                                            className='pl-4 pt-3'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-4'>
                                    <p className='text-xl text-gray-500'>Coffee Beans Packet</p>
                                    <p>Total Sell : 45897</p>
                                    <p>Total Earned : $45,89 M</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='pt-8'>
                        <Card className='w-[24vw] h-[25vh]'>
                            <div className='flex space-x-4 pt-7'>
                                <div className='pl-5'>
                                    <div className='h-[17vh] w-[8vw] bg-violet-200'>
                                        <img
                                            src='https://github.com/shadcn.png' height={100} width={100}
                                            alt='image'
                                            className='pl-4 pt-3'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-4'>
                                    <p className='text-xl text-gray-500'>Bottle Cup Set</p>
                                    <p>Total Sell : 44359</p>
                                    <p>Total Earned : $45,50 M</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            <div className='flex flex-row pt-10 pl-8 space-x-7'>
                <div>
                    <Card className='w-[24vw] h-[30vh]'>
                        <div className='flex h-[10vh] pt-3 pl-5'>
                            <div className='flex flex-col'>
                                <p>Expenses</p>
                                <p>$ 45,8956 K</p>
                            </div>
                            <div className='pl-[7vw]'>
                                <Select>
                                    <SelectTrigger id="Product">
                                        <SelectValue placeholder="This Month" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Year</SelectItem>
                                        <SelectItem value="sveltekit">Month</SelectItem>
                                        <SelectItem value="astro">Week</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <TinyLineCharts />
                    </Card>

                    <div className='pt-8'>
                        <Card className='w-[24vw] h-[30vh]'>
                            <div className='flex h-[10vh] pt-3 pl-5'>
                                <div className='flex flex-col'>
                                    <p>Expenses</p>
                                    <p>$ 45,8956 K</p>
                                </div>
                                <div className='pl-[7vw]'>
                                    <Select>
                                        <SelectTrigger id="Product">
                                            <SelectValue placeholder="This Month" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="next">Year</SelectItem>
                                            <SelectItem value="sveltekit">Month</SelectItem>
                                            <SelectItem value="astro">Week</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <TinyLineCharts />
                        </Card>
                    </div>
                </div>

                <Card className='w-[54vw] h-[65vh]'>
                    <div className='box-border flex border-b-2 h-[10vh] pt-5 pl-5'>
                        Top Products
                        <div className='pl-[36vw]'>
                            <Select>
                                <SelectTrigger id="Product">
                                    <SelectValue placeholder="This Month" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Year</SelectItem>
                                    <SelectItem value="sveltekit">Month</SelectItem>
                                    <SelectItem value="astro">Week</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {/* <TinyLineCharts /> */}
                </Card>
            </div>

        </div>
    )
}

export default Dashboard