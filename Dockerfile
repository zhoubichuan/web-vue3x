#设置构建的基础镜像
FROM node:16.20.2
RUN mkdir -p /project/
WORKDIR /project/
COPY . /project/
RUN cd /project
# RUN rm -rf /project/.npmrc
# RUN npm config set registry https://registry.npmmirror.com/
# RUN npm i
#在启动镜像时执行启动项目的命令
# CMD npm run dev
#暴露端口用于外部访问
EXPOSE 18086

#docker build -t template-project .