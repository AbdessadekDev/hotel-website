const constructMongoUri = (env: NodeJS.ProcessEnv): string => {
    const {
        MONGO_PROTOCOL = "",
        MONGO_USER = "",
        MONGO_PASSWD = "",
        MONGO_CLUSTER_ADDRESS = "",
        MONGO_OPTIONS = "",
        MONGO_DB_NAME = ""
      } = env;
      return `${MONGO_PROTOCOL}${MONGO_USER}:${MONGO_PASSWD}@${MONGO_CLUSTER_ADDRESS}/${MONGO_DB_NAME}?${MONGO_OPTIONS}`
}

export default constructMongoUri;