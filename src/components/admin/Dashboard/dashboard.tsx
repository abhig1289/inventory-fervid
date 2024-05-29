import React from 'react'
import { Card } from '../../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import { Progress } from '../../ui/progress'

const Dashboard = () => {
    return (
        <div>
                <div className='flex flex-row pt-10 pl-8 space-x-7'>
                    <span className='w-[29vw]'>
                        <p className='text-gray-600 text-2xl'> Hi Graham, Good Morning</p>
                        <p className='pt-5'>Your dashboard gives you views of key performance or business process.</p>
                    </span>
                    <Card className='w-[15vw] h-[20vh]'>
                        <div className='flex space-x-4 pt-7'>
                            <div className='pl-5'>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className='flex flex-col'>
                                <p>Total Sales</p>
                                <p>31.50</p>
                            </div>
                        </div>
                        <div className='pt-7 pl-5'>
                            <Progress className='h-2 w-[12vw]' value={83} />
                        </div>

                    </Card>

                    <Card className='w-[15vw] h-[20vh]'>
                        <div className='flex space-x-4 pt-7'>
                            <div className='pl-5'>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className='flex flex-col'>
                                <p>Total Cost</p>
                                <p>$ 4598</p>
                            </div>
                        </div>
                        <div className='pt-7 pl-5'>
                            <Progress className='h-2 w-[12vw]' value={73} />
                        </div>

                    </Card>

                    <Card className='w-[15vw] h-[20vh]'>
                        <div className='flex space-x-4 pt-7'>
                            <div className='pl-5'>
                                <Avatar>
                                    <AvatarImage src="https://templates.iqonic.design/posdash/html/assets/images/product/" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className='flex flex-col'>
                                <p>Product Sold</p>
                                <p>4589 M</p>
                            </div>
                        </div>
                        <div className='pt-7 pl-5'>
                            <Progress className='h-2 w-[12vw]' value={63} />
                        </div>

                    </Card>

                </div>

                <div className='flex flex-row pt-10 pl-8 space-x-7'>
                   <Card className='w-[35vw] h-[25vh]'>
kjjjj
                   </Card>

                   <Card className='w-[25vw] h-[25vh]'>
nnnn
                   </Card>
                </div>
        </div>
    )
}

export default Dashboard