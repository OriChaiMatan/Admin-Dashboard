import React, { useEffect } from 'react'
import * as echarts from 'echarts';

function WebTrafficChart() {
    useEffect(() => {
        const chartDom = document.querySelector('#trafficChart');
        const myChart = echarts.init(chartDom);
        myChart.setOption({
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ]
                }
            ]
        })

        return () => {
            myChart.dispose();
        };
    }, []);

    return (
        <div id="trafficChart" style={{ minHeight: '400px' }} className="echart"></div>
    )
}

export default WebTrafficChart