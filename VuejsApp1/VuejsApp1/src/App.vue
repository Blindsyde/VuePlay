<template>
    <div id="app" class="background">
        <div>
            <h1>Devices by User</h1>
            <info-list></info-list>
        </div>
    </div>
</template>

<script>
    import InfoList from './components/InfoList'
    export default {
        name: 'app',
        components: {
            InfoList
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