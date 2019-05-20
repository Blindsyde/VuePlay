<template>
    <div id="app" class="background">
        <div>
            <h1>Devices I have</h1>
            <device-list></device-list>
        </div>
    </div>
</template>

<script>
    import DeviceList from './components/DeviceList'
    export default {
        name: 'app',
        components: {
            DeviceList
        }
    }
</script>

<style>
    .background {
        background: #828282;
        margin: auto;
        text-align: center;
        border-radius: 10px;
        padding: 2%;
        width: 50%;
        height: 50%;
    }
</style>